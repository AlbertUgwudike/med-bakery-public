import 'react-circular-progressbar/dist/styles.css';
import Sketch from 'react-p5';
import p5Types from "p5";
import { useContext } from 'react';
import MetaContext from '../../MetaContext';

type ProgressPieProps = {
    sectionCount: number;
    sectionIdx: number;
    pieRadius: number;
    darkMode: boolean;
    questionIdx: number;
}

const ProgressPie = (props: ProgressPieProps) => {

    const { darkMode } = useContext(MetaContext);

    const piePad = 20;
    const letterRadius = 13;
    const canvasRadius = props.pieRadius + piePad;
    const backgroundColor = darkMode ? [31,31,31] : [246, 245, 240];
    const wedgeColor = darkMode ? [59, 32, 114] : [0, 0, 0];
    const textColor = darkMode ? [255, 255, 255] : [5, 9, 24];

    const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(2 * canvasRadius, 2 * canvasRadius).parent(canvasParentRef); 
	}

    const draw = (p5: p5Types) => {
        // clear the display
        p5.background(backgroundColor);
        p5.stroke(backgroundColor)

        // draw the progress pie segments
        p5.strokeWeight(10);
        for (let segmentIdx = 0; segmentIdx < props.sectionCount; segmentIdx++) {
            const angle = 2 * p5.PI / props.sectionCount;

            // section letter
            if (props.sectionIdx === segmentIdx) {
                const textPos = p5.createVector(0, props.pieRadius + letterRadius)
                                  .rotate(angle * segmentIdx - p5.PI + angle / 2)
                                  .add(canvasRadius, canvasRadius);

                p5.fill(textColor); p5.textSize(15);
                p5.text(String.fromCharCode(props.sectionIdx + 97), textPos.x, textPos.y);
            }
            
            p5.fill(props.sectionIdx === segmentIdx ? [250, 208, 0] : wedgeColor)
            p5.arc(
                canvasRadius, 
                canvasRadius, 
                2 * props.pieRadius, 
                2 * props.pieRadius, 
                angle * segmentIdx - p5.PI / 2, 
                angle * (1 + segmentIdx) - p5.PI / 2, 
                p5.PIE
            );
        }

        // draw the central panel
        p5.strokeWeight(0); p5.fill(backgroundColor);
        p5.ellipse(canvasRadius, canvasRadius, 1.64 * props.pieRadius, 1.64 * props.pieRadius);

        // draw the question number
        p5.textAlign(p5.CENTER, p5.CENTER); p5.fill(textColor); p5.textSize(50);
        p5.text("" + (props.questionIdx + 1), canvasRadius , canvasRadius);
    }

    return <Sketch setup = { setup } draw = { draw }/>
}

export default ProgressPie;