import { Dispatch, SetStateAction, useState } from "react";
import { Container } from "../Common";
import { Question, startAudioRecordingId, Station } from "../types";
import { Transition } from "react-transition-group";
import QuestionContent from "./QuestionContent";
import Header from "../Header";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type QuestionProps = {
    station: Station;
    questionIdx: number;
    updateStation: Dispatch<SetStateAction<Station>>;
    updateQuestionIdx: Dispatch<SetStateAction<number>>;
    handleExit: (questions: Question[], tok: string) => void;
};

const QuestionPage = (props: QuestionProps) => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const questionCount = props.station.questions.length;
    const history = useHistory();
    const idx = props.questionIdx;

    const nextFunc = () => {
        idx === questionCount - 1
            ? history.push("/OSCE/Station/Summary")
            : props.updateQuestionIdx(idx + 1);
        sliderRef?.slickNext();
    };

    const prevFunc = () => {
        if (idx > 0) props.updateQuestionIdx(idx - 1);
        sliderRef?.slickPrev();
    };

    const settings = {
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        initialSlide: props.questionIdx,
    };

    return (
        <Container>
            <Header
                updateStation={props.updateStation}
                station={props.station}
                handleExit={props.handleExit}
                title={"Station"}
                percentage={10 + (100 * idx) / questionCount}
                timer={true}
                nextFunc={nextFunc}
                prevFunc={prevFunc}
            />

            <Slider ref={setSliderRef} {...settings}>
                {props.station.questions.map((question, questionIdx) => (
                    <QuestionContent
                        question={question}
                        questionIdx={questionIdx}
                        updateStation={props.updateStation}
                        active={props.questionIdx === questionIdx}
                        nextFunc={nextFunc}
                        key={questionIdx}
                    />
                ))}
            </Slider>
        </Container>
    );
};

export default QuestionPage;
