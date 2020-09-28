import React from "react";
import { sequence } from "just-animate";
import { addPlugin } from "just-animate";
import { waapiPlugin } from "just-animate/lib/web";

interface HeartProps {
    color: number;
}

// Gets number as prop for selection of color
// Declares color themes for the different elements in the SVG

const ColorThemes = [
    {
        background: "#244E9A",
        man: "#FFCB01",
        heart: "#FE0002",
    },
    {
        background: "#FDF900",
        man: "#A4E800",
        heart: "#DC2908",
    },
    {
        background: "#F5E702",
        man: "#D05492",
        heart: "#8DDA50",
    },
];

class Heart extends React.Component<HeartProps> {
    constructor(props: HeartProps) {
        super(props);
        addPlugin(waapiPlugin);
    }

    // Starts the animation when it mounts
    componentDidMount() {
        this.animate();
    }

    // Function for animating elements in the svg element. Sets transformationOrigin, duration, delays and animations. Loops infinitely
    animate() {
        const heartAnimation = sequence([
            {
                targets: "#heart",
                duration: 0,
                web: {
                    transformOrigin: "54px 46px",
                },
            },
            {
                targets: "#heart",
                duration: 100,
                delay: 200,
                web: {
                    transform: [{ value: "scale(1.1)" }],
                },
            },
            {
                targets: "#heart",
                duration: 400,
                web: {
                    transform: [{ value: "scale(1)" }],
                },
            },
        ]);

        heartAnimation.play({
            repeat: Infinity,
        });

        const heartShineAnimation = sequence([
            {
                targets: "#heartShine",
                duration: 0,
                web: {
                    transformOrigin: "54px 46px",
                },
            },
            {
                targets: "#heartShine",
                duration: 100,
                delay: 200,
                web: {
                    transform: [{ value: "scale(1.1)" }],
                },
            },
            {
                targets: "#heartShine",
                duration: 400,
                delay: 1400,
                web: {
                    transform: [{ value: "scale(1)" }],
                },
            },
        ]);

        heartShineAnimation.play({
            repeat: Infinity,
        });
    }

    render() {
        return (
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }}
            >
                <g id="Layer1">
                    <rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        style={{
                            fill: ColorThemes[this.props.color].background,
                        }}
                    />
                    <g id="body">
                        <path
                            d="M47.044,92.952l4.076,-6.843c0,0 -22.632,-3.64 -9.327,-22.815c-0.021,-0.033 -11.243,-6.07 -9.387,-8.917c1.856,-2.847 4.998,-8.64 5.021,-8.814c-2.662,-0.887 -3.569,-7.467 5.114,-3.282c0.057,1.812 -3.835,10.598 -3.835,10.598l6.722,3.216l10.524,-1.407l5.264,-5.731c-0,-0 -6.267,-4.028 -6.78,-4.592c-0.78,-3.299 6.773,-10.394 5.724,-3.077c1.078,0.862 7.886,5.942 7.886,5.942l-5.897,9.432c0,-0 0.401,8.432 -0.148,10.181c1.304,0.459 9.026,0.343 9.026,0.343c-0,0 -0.38,8.821 -0.095,9.384c2.643,-1.372 14.287,2.766 -4.688,5.528c-0.025,-1.284 -0.379,-9.179 -0.379,-9.179c0,0 -10.483,5.436 -13.645,6.114c1.48,0.846 6.668,2.809 6.61,3.837c-0.057,1.029 -4.914,6.274 -4.834,6.943c2.977,-0.337 10.046,7.554 -6.952,3.139Z"
                            style={{
                                fill: ColorThemes[this.props.color].man,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M50.173,62.144c-1.713,-0.779 -10.559,-5.533 -1.212,-9.528c8.369,-3.31 7.769,7.307 7.553,7.062"
                            style={{
                                fill: ColorThemes[this.props.color].man,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <path
                        id="heart"
                        d="M53.04,46.059c0,-0 6.06,-29.59 -8.428,-29.628c-5.845,0.02 -3.229,9.599 -3.145,10.671c-1.353,-0.961 -10.259,-11.632 -14.285,-2.577c-4.027,9.055 6.247,17.578 25.858,21.534Z"
                        style={{
                            fill: ColorThemes[this.props.color].heart,
                            stroke: "#000",
                            strokeWidth: "2.08px",
                        }}
                    />
                    <g id="heartShine">
                        <path
                            d="M29.808,43.121l-2.262,2.585l2.262,-2.585Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M26.136,39.523l-3.133,2.961l3.133,-2.961Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M21.228,36.483l2.481,-1.169l-2.481,1.169Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M18.794,30.068l3.53,0.102l-3.53,-0.102Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M22.522,24.436l-2.014,-0.415l2.014,0.415Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M24.253,20.181l-3.333,-3.413l3.333,3.413Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M26.7,16.158l-1.083,-2.794l1.083,2.794Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M33.278,14.686l-1.801,-5.548l1.801,5.548Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M37.585,13.395l0.177,-3.88l-0.177,3.88Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M43.441,11.087l0.278,-4.784l-0.278,4.784Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M48.828,10.14l1.537,-2.132l-1.537,2.132Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M53.314,13.031l4.575,-4.924l-4.575,4.924Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M56.913,17.993l2.698,-2.607l-2.698,2.607Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M59.34,22.43l6.151,-3.289l-6.151,3.289Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M60.836,27.826l2.878,-1.134l-2.878,1.134Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M58.894,33.161l6.134,-1.338l-6.134,1.338Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g>
                        <path
                            d="M80.008,56.933c0,0 -0.663,-4.672 -2.988,-6.927"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M72.29,51.257c-0,0 4.607,5.513 3.259,10.046"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M71.754,57.967c-0,-0 -0.144,-2.805 -1.857,-4.167"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g>
                        <path
                            d="M79.561,91.553c-0,-0 1.469,-3.503 0.906,-6.866"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M74.264,93.495c0,-0 3.348,-6.487 2.285,-9.502"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M71.646,89.803c-0,-0 1.254,-2.347 0.797,-4.76"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g>
                        <path
                            d="M23.335,77.402c0,-0 -4.326,-4.653 -2.157,-9.986"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M28.752,80.409c0,0 -6.842,-9.435 -2.327,-15.964"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M30.904,73.396c-0,-0 -3.543,-3.94 -0.777,-6.826"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                </g>
            </svg>
        );
    }
}

export default Heart;
