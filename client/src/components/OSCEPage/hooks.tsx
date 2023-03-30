import axios from "axios";
import { useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { produceHeat } from "../../functions";
import {
    MarkSchemeSection,
    mimeTypes,
    Question,
    startAudioRecordingId,
    Station,
    StationSummary,
    UserDetailsOsce,
} from "./types";

export const useLoopTime = (upperLimit: number): number => {
    const [time, setTime] = useState(upperLimit);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => {
                if (time === 0) {
                    clearInterval(interval);
                    return 0;
                } else return time - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;
};

export const playStartTone = () =>
    (document.getElementById(startAudioRecordingId) as HTMLAudioElement)?.play();

const handleAudioSession = (
    stream: MediaStream,
    updateFunc: (audio: string) => void,
    startFunc: () => void
) => {
    // cannot make media recorder if stream invalid
    if (!stream) return;

    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = function (this, e) {
        const blob = new Blob([e.data], { type: "audio/ogg; codecs=opus" });
        updateFunc(window.URL.createObjectURL(blob));
    };

    recorder.onstart = startFunc;

    recorder.onstop = () => {
        stream.getTracks().forEach(track => track.stop());
        playStartTone();
    };

    recorder.start();

    return recorder;
};

export const useRecorder = (
    updateFunc: (audio: string) => void,
    startFunc: () => void
): [() => void, () => void] => {
    const [recorder, updateRecorder] = useState<MediaRecorder>();

    // attempt to retrieve a user input stream
    const startRecorder = async () => {
        try {
            const sesh = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = handleAudioSession(sesh, updateFunc, startFunc);
            updateRecorder(recorder);
            produceHeat(11);
        } catch (e) {
            console.error("startRecorder (hooks.tsx): Failed to commence audio session");
        }
    };

    return [startRecorder, () => recorder?.stop()];
};

export const generateWaveSurfer = (containerId: string, audioUrl: string) => {
    const ws = WaveSurfer.create(waveSurferParams(containerId));
    if (audioUrl) ws.load(audioUrl);
    return ws;
};

export const waveSurferParams = (containerId: string) => ({
    container: "#" + containerId,
    waveColor: "white",
    progressColor: "#FAD000",
    height: 20,
    cursorWidth: 0,
    hideScrollbar: true,
});

export const toggleMarkPoint = (
    station: Station,
    questionIdx: number,
    pointId: number
): Station => ({
    ...station,
    questions: station.questions.map((q, i) =>
        i === questionIdx
            ? {
                  ...q,
                  markScheme: q.markScheme.map(ms => ({
                      ...ms,
                      points: ms.points.map(pt => ({
                          ...pt,
                          selected: pt.pointId === pointId ? !pt.selected : pt.selected,
                      })),
                  })),
              }
            : q
    ),
});

export const countPoints = (markScheme: MarkSchemeSection[]): [number, number] => {
    return markScheme.reduce(
        (acc, a) => {
            return [
                acc[0] + a.points.reduce((total, pt) => total + (pt.selected ? 1 : 0), 0),
                acc[1] + a.points.length,
            ];
        },
        [0, 0]
    );
};

export const binaryToCode = (points: (0 | 1)[]): number => {
    const arr = points.reverse();
    return arr.reduce((acc, n, i) => (acc += n * Math.pow(2, i)), 0 as number);
};

export const getBinaryDigits = (n: number): (0 | 1)[] => {
    let curr = n;
    let arr: (0 | 1)[] = [];
    while (curr > 0) {
        arr.push(curr % 2 === 0 ? 0 : 1);
        curr = Math.floor(curr / 2);
    }
    return arr.reverse();
};

export const markPercentage = (markCode: number): number => {
    const marks = getBinaryDigits(markCode).slice(1);
    return marks.length > 0
        ? Math.round((100 * marks.reduce((a, b) => a + b, 0 as number)) / marks.length)
        : 0;
};

export const populateMarkScheme = (station: Station, marks: (0 | 1)[]): Station => {
    let idx = 0;
    station.questions.forEach(q =>
        q.markScheme.forEach(ms =>
            ms.points.forEach(p => {
                p.selected = marks[idx] === 1;
                idx += 1;
            })
        )
    );
    return station;
};

export const rawToUrl = (raw: string, type: string): string => {
    const byteArray = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) {
        byteArray[i] = raw.charCodeAt(i);
    }
    return window.URL.createObjectURL(new Blob([byteArray], { type }));
};

export const populateResponseAudios = (station: Station, responseAudios: string[]): Station => {
    station.questions.forEach((q, i) => {
        q.responseAudio = rawToUrl(responseAudios[i], "audio/mp3");
    });
    return station;
};

export const downloadAssets = async (station: Station, SERVER_URL: string): Promise<Station> => {
    for (const question of station.questions) {
        // get local copies of exemplar, question and img
        question.exemplarAudio = await convertToLocal(question.exemplarAudio, SERVER_URL);
        question.questionAudio = await convertToLocal(question.questionAudio, SERVER_URL);
        question.img = await convertToLocal(question.img, SERVER_URL);
    }
    return new Promise((r, _) => r(station));
};

const convertToLocal = async (remoteUrl: string, SERVER_URL: string): Promise<string> => {
    const fres = await fetch(SERVER_URL + "/media/osce/" + remoteUrl);
    return new Promise(async (r, _) => r(window.URL.createObjectURL(await fres.blob())));
};

export const extractReponseAudio = async (questions: Question[]): Promise<string[]> => {
    const arrays = questions.map(async question => {
        if (question.responseAudio === "") return "";
        const res = await fetch(question.responseAudio);
        const buffer = await res.arrayBuffer(); // <== no audio upload on iphone bug
        return Buffer.from(buffer).toString("binary");
    });
    return Promise.all(arrays);
};

export const convertToString = (time: number) => {
    const minutes = Math.floor(time / 60);
    const minuteString = minutes < 10 ? "0" + minutes : "" + minutes;
    const seconds = time % 60;
    const secondsString = seconds < 10 ? "0" + seconds : "" + seconds;
    return minuteString + ":" + secondsString;
};

export const useUserDetails = (SERVER_URL: string, token: string): [UserDetailsOsce, boolean] => {
    const [userLoading, updateUserLoading] = useState(false);
    const [userDetailsOsce, updateUserDetailsOsce] = useState<UserDetailsOsce>({
        answeredStations: [],
        purchasedOsce: false,
    });

    const loadUserDetails = async () => {
        updateUserLoading(true);

        try {
            const res = await axios.post(SERVER_URL + "/user/osce_details", { token });

            if (!res.data.success) {
                throw "loadUserDetails (OSCEPage.tsx): user details retrieval failed";
            }

            const { answeredStations, purchasedOsce } = res.data;
            updateUserDetailsOsce({ answeredStations, purchasedOsce });
        } catch (error) {
            console.error(error);
        }

        updateUserLoading(false);
    };

    useEffect(() => {
        if (token) {
            loadUserDetails();
        } else {
            updateUserDetailsOsce({
                answeredStations: [],
                purchasedOsce: false,
            });
        }
    }, [token]);

    return [userDetailsOsce, userLoading];
};

export const useStations = (
    SERVER_URL: string,
    token: string
): [stations: StationSummary[], loading: boolean] => {
    const [stationeSummariesLoading, updateSummariesLoading] = useState(false);
    const [stationSummarires, updateStationSummaries] = useState<StationSummary[]>([]);

    const loadSummaries = async () => {
        updateSummariesLoading(true);

        try {
            const res = await axios.post(SERVER_URL + "/osce/get_stations", { token });

            if (!res.data.success) {
                throw "loadSummaries (OSCEPage.tsx): station summary retrieval failed";
            }

            updateStationSummaries(res.data.summaries);
        } catch (error) {
            console.error(error);
        }
        updateSummariesLoading(false);
    };

    // cant have asynchronous effect callback
    useEffect(() => {
        loadSummaries();
    }, []);

    return [stationSummarires, stationeSummariesLoading];
};
