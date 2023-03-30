import Sketch from "react-p5";
import p5Types from "p5";
import { useContext } from "react";
import MetaContext from "../../MetaContext";
import styled from "styled-components";

type ProgressPieProps = {
    radius: number;
    percentage: number;
};

const arcCoords = (r: number, a: number): { x: number; y: number } => ({
    x: r + r * Math.sin(a),
    y: r - r * Math.cos(a),
});

const ProgressPie = (props: ProgressPieProps) => {
    const r = props.radius;
    const angle = ((44 / 7) * props.percentage) / 100;
    const coords = arcCoords(r, angle);

    const extraPath = props.percentage > 50 ? `A${r},${r} 1 0, 1, ${coords.x},${coords.y}` : "";

    const { x, y } = props.percentage > 50 ? { x: r, y: 2 * r } : coords;
    const path = `M${r},${r} L${r},0 A${r},${r} 1 0, 1, ${x},${y} ${extraPath} z`;

    return (
        <div style={{ margin: "10px 0" }}>
            <svg style={{ height: `${2 * r}px`, width: `${2 * r}px` }}>
                <Circle cx={r} cy={r} r={r} style={{ fill: "#990000" }}></Circle>
                <path d={path} style={{ fill: "green" }}></path>
                <Circle cx={r} cy={r} r={r * 0.95}></Circle>
                <text
                    x={r}
                    y={r}
                    fill="#FAD000"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize={40}
                >
                    {Math.round(props.percentage)}%
                </text>
            </svg>
        </div>
    );
};

export default ProgressPie;

const Circle = styled.circle`
    fill: #1c2124;
`;
