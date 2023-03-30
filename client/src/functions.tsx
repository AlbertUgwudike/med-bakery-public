import { MasterCategory } from "./types";
import { useState, useLayoutEffect } from "react";
import { OAuth2Client } from "google-auth-library";
import { Station } from "./components/OSCEPage/types";
import { GoogleLoginResponse } from "react-google-login";

export const updateCategory = (
    root: MasterCategory,
    path: string[],
    value: boolean
): MasterCategory => {
    if (path.length === 0) {
        return {
            ...root,
            selected: value,
            subcategories: root.subcategories.map(falsifyCategorySelection),
        };
    }

    const nextCategoryIdx = root.subcategories.findIndex(sc => sc.categoryTitle === path[0])!;

    return {
        ...root,
        selected: false,
        subcategories: root.subcategories.map((sc, idx) =>
            idx === nextCategoryIdx ? updateCategory(sc, path.slice(1), value) : sc
        ),
    };
};

export const falsifyCategorySelection = (category: MasterCategory): MasterCategory => {
    return {
        ...category,
        selected: false,
        subcategories: category.subcategories.map(falsifyCategorySelection),
    };
};

export const getAllPaths = (root: MasterCategory): string[][] => {
    if (root.subcategories.length === 0) return [[root.categoryTitle]];

    return root.subcategories.reduce((categoryList, category) => {
        return categoryList.concat(getAllPaths(category).map(p => [root.categoryTitle].concat(p)));
    }, [] as string[][]);
};

export const getPaths = (root: MasterCategory): string[][] => {
    if (root.selected) return getAllPaths(root);

    if (root.subcategories.length === 0) return root.selected ? [[root.categoryTitle]] : [];

    return root.subcategories.reduce((categoryList, category) => {
        return categoryList.concat(getPaths(category).map(p => [root.categoryTitle].concat(p)));
    }, [] as string[][]);
};

export const useToken = () => {
    const getToken = () => {
        const token = sessionStorage.getItem("token");
        return token ? token : "";
    };

    const [token, setToken] = useState(getToken());

    const saveToken: (userToken: string) => void = userToken => {
        sessionStorage.setItem("token", userToken);
        setToken(userToken);
    };

    return { token, setToken: saveToken };
};

// --------------------------------------------------------------------------------------

export const handleLogOut = (setToken: (userToken: string) => void) => {
    setToken("");
    window.location.href = "/";
};

export const getEmailFromToken = async (tokenId: string) => {
    const client = new OAuth2Client(process.env.GOOGlE_CLIENT_ID);
    const ticket = await client
        .verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGlE_CLIENT_ID,
        })
        .catch(console.log);

    if (!ticket) return "";

    return ticket!.getPayload()!.email;
};

export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener("resize", updateSize);
        updateSize();

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
};

// remember this, this is how we store tings in mongodb
const binaryToBlobUrl = (byteArray: Uint8Array, mimetype: string) => {
    // console.log("barrya", new Uint8Array(Object.values(byteArray)));
    const blob = new Blob([new Uint8Array(Object.values(byteArray))], { type: mimetype });
    return window.URL.createObjectURL(blob);
};

// const convertBlobsToLinks = (stn: Station<Uint8Array>): Station => {
//     return {
//         ...stn,
//         questions: stn.questions.map(q => ({
//             ...q,
//             questionAudio: binaryToBlobUrl(q.questionAudio, "audio/mpeg"),
//             exemplarAudio: binaryToBlobUrl(q.exemplarAudio, "image/jpeg"),
//             img: binaryToBlobUrl(q.img, "audio/mpeg"),
//             responseAudio: "",
//         })),
//     };
// };

export const produceHeat = (n: number) => {
    console.time("producing heat");
    let result = 0;
    for (var i = Math.pow(n, 7); i >= 0; i--) {
        result += Math.atan(i) * Math.tan(i);
    }
    console.timeEnd("producing heat");
};
