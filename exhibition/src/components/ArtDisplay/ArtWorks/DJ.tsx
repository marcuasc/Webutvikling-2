import React from "react";
import { sequence } from "just-animate";
import { addPlugin } from "just-animate";
import { waapiPlugin } from "just-animate/lib/web";

interface DJProps {
    color: number;
}

// Gets number as prop for selection of color
// Declares color themes for the different elements in the SVG

const ColorThemes = [
    {
        background: "#DFD35B",
        table: "#4FA5D8",
        base: "#C24E75",
        disk: "#80CBB7",
        dog: "#DD8239",
    },
    {
        background: "#FDF900",
        table: "#A4E800",
        base: "#DC2908",
        disk: "#FE0002",
        dog: "#17A2E5",
    },
    {
        background: "#F5E702",
        table: "#D05492",
        base: "#8DDA50",
        disk: "#07B2EA",
        dog: "#DC2908",
    },
];

class DJ extends React.Component<DJProps> {
    constructor(props: DJProps) {
        super(props);
        addPlugin(waapiPlugin);
    }

    // Starts the animation when it mounts
    componentDidMount() {
        this.animate();
    }

    // Function for animating elements in the svg element. Sets transformationOrigin, duration, delays and animations. Loops infinitely
    animate() {
        const leftArmAnimation = sequence([
            {
                targets: "#leftArm",
                duration: 0,
                web: {
                    transformOrigin: "22px 67px",
                },
            },
            {
                targets: "#leftArm",
                duration: 1000,
                web: {
                    transform: [{ value: "rotate(10deg)" }],
                },
            },
            {
                targets: "#leftArm",
                duration: 1000,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        leftArmAnimation.play({
            repeat: Infinity,
        });

        const rightArmAnimation = sequence([
            {
                targets: "#rightArm",
                duration: 0,
                web: {
                    transformOrigin: "74px 61px",
                },
            },
            {
                targets: "#rightArm",
                duration: 250,
                web: {
                    transform: [{ value: "rotate(10deg)" }],
                },
            },
            {
                targets: "#rightArm",
                duration: 250,
                web: {
                    transform: [{ value: "rotate(-5deg)" }],
                },
            },
            {
                targets: "#rightArm",
                duration: 250,
                web: {
                    transform: [{ value: "rotate(10deg)" }],
                },
            },
            {
                targets: "#rightArm",
                duration: 250,
                web: {
                    transform: [{ value: "rotate(-5deg)" }],
                },
            },
            {
                targets: "#rightArm",
                duration: 250,
                web: {
                    transform: [{ value: "rotate(10deg)" }],
                },
            },
            {
                targets: "#rightArm",
                duration: 250,
                web: {
                    transform: [{ value: "rotate(-5deg)" }],
                },
            },
            {
                targets: "#rightArm",
                duration: 250,
                web: {
                    transform: [{ value: "rotate(10deg)" }],
                },
            },
            {
                targets: "#rightArm",
                duration: 250,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        rightArmAnimation.play({
            repeat: Infinity,
        });

        const barkAnimation = sequence([
            {
                targets: "#bark",
                duration: 0,
                web: {
                    transformOrigin: "73px 41px",
                },
            },
            {
                targets: "#bark",
                duration: 500,
                web: {
                    transform: [{ value: "scale(0.7) translate(-3px, 0px)" }],
                },
            },
            {
                targets: "#bark",
                duration: 500,
                web: {
                    transform: [{ value: "scale(1) translate(0px, 0px)" }],
                },
            },
            {
                targets: "#bark",
                duration: 500,
                web: {
                    transform: [{ value: "scale(0.7) translate(-3px, 0px)" }],
                },
            },
            {
                targets: "#bark",
                duration: 500,
                web: {
                    transform: [{ value: "scale(1) translate(0px, 0px)" }],
                },
            },
        ]);

        barkAnimation.play({
            repeat: Infinity,
        });
    }

    render() {
        return (
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                version="1.1"
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
                    <g>
                        <g id="bark">
                            <path
                                d="M73.388,37.539l2.735,-2.196l-2.735,2.196Z"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "1.39px",
                                }}
                            />
                            <path
                                d="M74.182,39.582l5.825,-1.539l-5.825,1.539Z"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "1.39px",
                                }}
                            />
                            <path
                                d="M74.965,42.024l3.674,0.87l-3.674,-0.87Z"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "1.39px",
                                }}
                            />
                            <path
                                d="M75.032,44.581l4.185,2.972l-4.185,-2.972Z"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "1.39px",
                                }}
                            />
                        </g>
                        <path
                            d="M80.24,56.333c-0,0 2.869,5 1.406,8.071"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M82.223,77.101c0,-0 1.209,0.76 1.209,2.402"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M84.855,75.219c-0,-0 1.753,1.892 1.4,4.121"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M60.256,76.073c-0,0 1.184,-1.088 2.578,-0.803"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M60.605,72.912c0,-0 0.956,-0.681 2.348,0.025"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M44.847,79.592c0,0 -1.555,-2.178 -3.213,-2.146"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M46.578,78.396c-0,-0 -0.53,-2.399 -2.42,-2.462"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M16.721,79.629c0,-0 1.805,-2.271 3.416,-2.283"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M14.282,78.983c0,-0 1.915,-3.338 3.942,-3.393"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M9.027,76.502c0,0 -3.569,-5.272 0.855,-13.206"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M6.295,80.67c0,0 -5.561,-10.085 0.277,-18.784"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M83.463,52.683c0,0 5.639,9.125 0.408,16.276"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                    </g>
                    <g id="body">
                        <path
                            d="M32.49,100.987l2.433,-36.355l-0.926,-0.431l-10.827,4.012l-3.671,-2.179l3.5,-4.21l8.607,-2.345l5.985,-3.589l1.949,-2.99l-1.518,-6.572l-4.378,-6.852l5.914,0.059l-0.482,-4.296l5.754,2.055l21.747,-5.477l2.215,3.944l-16.675,7.478l17.187,2.11l0.507,3.177l-15.787,3.998l0.941,3.268l19.437,5.22l-4.026,6.844l-7.553,-2.882l-6.843,-1.466l1.895,37.19l-11.358,0.406l-0.512,-6.48l-3.651,0.016l-0.102,6.953l-9.762,-0.606Z"
                            style={{ fill: ColorThemes[this.props.color].dog }}
                        />
                        <path
                            d="M32.486,101.088c-0,0 2.479,-33.4 2.478,-36.386c-0,-2.986 -10.317,5.431 -13.953,2.575"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M22.844,61.511c1.252,1.128 16.249,-4.575 16.543,-8.622c0.295,-4.046 -3.509,-10.814 -6.153,-13.517c-0.236,-0.047 6.34,0.237 6.34,0.237l-0.735,-4.601l5.91,2.366c0,0 19.186,-5.67 21.751,-5.563c0.631,0.102 2.324,3.94 2.324,3.94l-18.249,7.78l19.071,1.542l0.59,3.532l-16.619,3.775l0.906,3.422c0,-0 18.766,3.689 19.669,5.008"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M41.896,100.653l0.166,-6.282l3.833,-0.151l0.402,6.381"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M57.946,100.602c0,-0 -1.545,-34.927 -2.064,-36.915c-0.279,-0.821 10.302,1.888 11.327,2.841"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                    </g>
                    <g id="table">
                        <path
                            d="M3,101c0,0 0.302,-12.238 1,-12c0.698,0.238 40.214,-0.391 42,0c1.786,0.391 9.176,-0.067 11,0c1.824,0.067 36.373,-1.866 37,0c0.627,1.866 0,12 0,12l-7,0c0,0 0.612,-3.286 0,-4c-0.612,-0.714 -32.511,-1.397 -35,-1c-2.489,0.397 -22.419,0.417 -24,0c-1.581,-0.417 -18.35,-0.694 -19,0c-0.65,0.694 -0.333,5.771 -1,6c-0.667,0.229 -5,-1 -5,-1Z"
                            style={{
                                fill: ColorThemes[this.props.color].table,
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M12,91c0,0 3.673,2.261 10,2c6.327,-0.261 14.727,0.77 18,0c3.273,-0.77 5.557,-0.631 5.556,-1.429c-0.001,-0.797 0.71,-5.992 -0.255,-6.465c-0.965,-0.474 -31.39,-2.262 -32.597,-0.748c-1.206,1.515 -0.676,4.289 -0.704,6.642Z"
                            style={{
                                fill: ColorThemes[this.props.color].base,
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M54.552,83.251c0,-0 -0.964,5.12 -0.19,6.774c0.775,1.654 17.333,1.531 19.287,1.311c1.955,-0.22 13.122,0.316 13.361,-1.578c0.239,-1.894 0.445,-6.432 -0.996,-6.625c-1.442,-0.192 -30.709,-0.74 -31.462,0.118Z"
                            style={{
                                fill: ColorThemes[this.props.color].base,
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M30.561,79.574c-0,0 -13.403,-0.536 -13.043,4.064c0.361,4.6 8.65,4.492 11.442,4.492c2.791,0 13.966,-0.883 13.888,-4.47c-0.079,-3.587 -9.22,-4.46 -12.287,-4.086Z"
                            style={{
                                fill: ColorThemes[this.props.color].disk,
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M69.501,78.09c0,0 -11.135,-1.146 -10.743,3.915c0.392,5.061 9.435,4.697 11.426,4.733c1.991,0.036 11.032,-0.095 11.134,-3.847c0.102,-3.751 -9.33,-5.16 -11.817,-4.801Z"
                            style={{
                                fill: ColorThemes[this.props.color].disk,
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M28.669,81.564c-0,0 -4.273,0.024 -3.364,2.011c0.909,1.986 1.985,2.208 3.976,1.712c1.99,-0.496 4.316,-0.835 4.292,-2.06c-0.025,-1.226 -3.29,-1.582 -4.904,-1.663Z"
                            style={{
                                fill: "#fff",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M70.019,83.944c0,0 -3.779,-0.236 -3.664,-1.941c0.115,-1.705 1.603,-2.026 3.509,-2.078c1.905,-0.053 5.769,0.583 5.722,1.941c-0.047,1.358 -4.095,1.876 -5.567,2.078Z"
                            style={{
                                fill: "#fff",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <ellipse
                            cx="70.365"
                            cy="81.801"
                            rx="0.762"
                            ry="0.517"
                        />
                        <ellipse cx="29.022" cy="83.26" rx="0.762" ry="0.517" />
                    </g>
                    <path
                        id="rightArm"
                        d="M67.243,66.548c-0,-0 1.719,14.307 4.037,15.069c2.318,0.762 5.637,0.726 5.194,-2.497c-0.443,-3.222 -1.738,-5.012 -1.847,-6.656c-0.109,-1.644 0.081,-10.667 -0.31,-11.642"
                        style={{
                            fill: ColorThemes[this.props.color].dog,
                            stroke: "#000",
                            strokeWidth: "1.39px",
                        }}
                    />
                    <g id="leftArm">
                        <path
                            d="M12.557,29.698c0,-0 10.445,0.022 10.212,10.157c-0.234,10.135 -8.762,9.592 -9.823,9.781c-1.061,0.188 -11.033,-0.093 -10.156,-10.284c0.876,-10.19 9.81,-9.539 9.767,-9.654Z"
                            style={{
                                fill: ColorThemes[this.props.color].disk,
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M12.191,35.567c-0,0 3.406,0.502 3.134,3.35c-0.272,2.849 -2.997,3.224 -3.309,3.224c-0.312,0 -3.219,-0.971 -3.296,-3.174c-0.077,-2.204 2.222,-3.308 3.471,-3.4Z"
                            style={{
                                fill: "#fff",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <ellipse cx="12.21" cy="38.833" rx="0.941" ry="0.859" />
                        <path
                            d="M23.007,61.633l-10.87,-11.79c0,0 0.526,-5.003 -2.172,-4.793c-2.697,0.21 -3.891,3.672 -3.439,5.451c0.452,1.78 12.004,15.547 14.462,16.811"
                            style={{
                                fill: ColorThemes[this.props.color].dog,
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M22.1,51.476c-0,-0 3.608,-2.095 3.961,-4.596"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                        <path
                            d="M21.69,48.31c-0,-0 2.555,-1.039 2.792,-2.852"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.39px",
                            }}
                        />
                    </g>
                </g>
            </svg>
        );
    }
}

export default DJ;
