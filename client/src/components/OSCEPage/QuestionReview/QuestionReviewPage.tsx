import { Dispatch, SetStateAction, useState } from "react";
import { Container } from "../Common";
import { Question, Station } from "../types";
import { Transition } from "react-transition-group";
import QuestionReviewContent from "./QuestionReviewContent";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Slider from "react-slick";

type QuestionReviewPageProps = {
    station: Station;
    updateStation: Dispatch<SetStateAction<Station>>;
    questionIdx: number;
    updateIdx: Dispatch<SetStateAction<number>>;
    reviewMode: boolean;
    handleExit: (questions: Question[], tok: string) => void;
};

const QuestionReviewPage = (props: QuestionReviewPageProps) => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const history = useHistory();
    const idx = props.questionIdx;
    const questionCount = props.station.questions.length;

    const nextFunc = () => {
        idx === questionCount - 1
            ? history.push("/OSCE/Station/MarkReview")
            : props.updateIdx(idx + 1);
        sliderRef?.slickNext();
    };

    const prevFunc = () => {
        if (idx > 0) props.updateIdx(idx - 1);
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
        <Container style={{ textAlign: "center" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                }}
            >
                <Header
                    updateStation={props.updateStation}
                    station={props.station}
                    handleExit={props.handleExit}
                    title={"Review"}
                    percentage={10 + (100 * idx) / questionCount}
                    timer={false}
                    nextFunc={nextFunc}
                    prevFunc={prevFunc}
                />

                <Slider ref={setSliderRef} {...settings}>
                    {props.station.questions.map((q, questionIdx) => (
                        <QuestionReviewContent
                            question={q}
                            questionIdx={questionIdx}
                            updateStation={props.updateStation}
                            reviewMode={props.reviewMode}
                            active={questionIdx === props.questionIdx}
                        />
                    ))}
                </Slider>
            </div>
        </Container>
    );
};

export default QuestionReviewPage;
