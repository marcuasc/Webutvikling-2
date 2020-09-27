import React from "react";
import { sequence } from "just-animate";
import { addPlugin } from "just-animate";
import { waapiPlugin } from "just-animate/lib/web";

interface DogsProps {
    color: number;
}

const ColorThemes = [
    {
        background: "#F5E702",
        ground: "#D05492",
        dogs: "#8DDA50",
    },
    {
        background: "#FDF900",
        ground: "#A4E800",
        dogs: "#DC2908",
    },
    {
        background: "#63AFE3",
        ground: "#FF7802",
        dogs: "#C24E75",
    },
];

class Dogs extends React.Component<DogsProps> {
    constructor(props: DogsProps) {
        super(props);
        addPlugin(waapiPlugin);
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        const leftDogMouthAnimation = sequence([
            {
                targets: "#leftDogMouth",
                duration: 0,
                web: {
                    transformOrigin: "31px 50px",
                },
            },
            {
                targets: "#leftDogMouth",
                duration: 300,
                web: {
                    transform: [{ value: "rotate(40deg)" }],
                },
            },
            {
                targets: "#leftDogMouth",
                duration: 300,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        leftDogMouthAnimation.play({
            repeat: Infinity,
        });

        const rightDogMouthAnimation = sequence([
            {
                targets: "#rightDogMouth",
                duration: 0,
                web: {
                    transformOrigin: "75px 53px",
                },
            },
            {
                targets: "#rightDogMouth",
                duration: 300,
                web: {
                    transform: [{ value: "rotate(-40deg)" }],
                },
            },
            {
                targets: "#rightDogMouth",
                duration: 300,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        rightDogMouthAnimation.play({
            repeat: Infinity,
        });

        const leftBarkAnimation = sequence([
            {
                targets: "#leftBark",
                duration: 0,
                web: {
                    transformOrigin: "48px 49px",
                },
            },
            {
                targets: "#leftBark",
                duration: 300,
                web: {
                    transform: [{ value: "scale(0.01) translate(-5px, 5px)" }],
                },
            },
            {
                targets: "#leftBark",
                duration: 300,
                web: {
                    transform: [{ value: "scale(1) translate(0px, 0px)" }],
                },
            },
        ]);

        leftBarkAnimation.play({
            repeat: Infinity,
        });

        const rightBarkAnimation = sequence([
            {
                targets: "#rightBark",
                duration: 0,
                web: {
                    transformOrigin: "66px 46px",
                },
            },
            {
                targets: "#rightBark",
                duration: 300,
                web: {
                    transform: [{ value: "scale(0.01) translate(5px, 5px)" }],
                },
            },
            {
                targets: "#rightBark",
                duration: 300,
                web: {
                    transform: [{ value: "scale(1) translate(0px, 0px)" }],
                },
            },
        ]);

        rightBarkAnimation.play({
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
                    <g id="ground">
                        <rect
                            x="-7"
                            y="76.107"
                            width="114"
                            height="28.501"
                            style={{
                                fill: ColorThemes[this.props.color].ground,
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <ellipse cx="1.049" cy="82.375" rx="2.256" ry="1.504" />
                        <ellipse cx="8.024" cy="83.647" rx="1.504" ry="1.605" />
                        <ellipse
                            cx="14.457"
                            cy="84.544"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="21.019"
                            cy="85.264"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse
                            cx="33.615"
                            cy="82.441"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse cx="26.64" cy="81.169" rx="1.504" ry="1.605" />
                        <ellipse
                            cx="20.206"
                            cy="80.272"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="13.645"
                            cy="79.552"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse
                            cx="-0.939"
                            cy="92.279"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse cx="5.623" cy="92.999" rx="1.506" ry="1.407" />
                        <ellipse
                            cx="18.218"
                            cy="90.176"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse
                            cx="11.243"
                            cy="88.904"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse cx="6.108" cy="78.172" rx="1.504" ry="1.605" />
                        <ellipse cx="4.81" cy="88.007" rx="1.762" ry="1.605" />
                        <ellipse
                            cx="26.871"
                            cy="86.563"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse
                            cx="33.846"
                            cy="87.835"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="40.279"
                            cy="88.733"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="46.841"
                            cy="89.453"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse cx="59.437" cy="86.63" rx="2.256" ry="1.504" />
                        <ellipse
                            cx="52.462"
                            cy="85.358"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse cx="46.029" cy="84.46" rx="1.762" ry="1.605" />
                        <ellipse cx="39.467" cy="83.74" rx="1.506" ry="1.407" />
                        <ellipse
                            cx="44.041"
                            cy="94.364"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse
                            cx="37.066"
                            cy="93.093"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="30.633"
                            cy="92.195"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="24.071"
                            cy="91.475"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse cx="24.663" cy="95.59" rx="1.504" ry="1.605" />
                        <ellipse cx="18.23" cy="94.693" rx="1.762" ry="1.605" />
                        <ellipse
                            cx="11.668"
                            cy="93.972"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse
                            cx="43.406"
                            cy="98.091"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="36.973"
                            cy="97.194"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="30.411"
                            cy="96.473"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse
                            cx="14.095"
                            cy="98.311"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse cx="7.661" cy="97.414" rx="1.762" ry="1.605" />
                        <ellipse cx="1.099" cy="96.693" rx="1.506" ry="1.407" />
                        <ellipse
                            cx="33.252"
                            cy="100.903"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="26.819"
                            cy="100.006"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="20.257"
                            cy="99.286"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse cx="64.175" cy="101.3" rx="1.504" ry="1.605" />
                        <ellipse
                            cx="57.741"
                            cy="100.403"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse cx="51.18" cy="99.683" rx="1.506" ry="1.407" />
                        <ellipse
                            cx="58.539"
                            cy="81.667"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="58.499"
                            cy="77.605"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse cx="52.106" cy="80.77" rx="1.762" ry="1.605" />
                        <ellipse
                            cx="45.544"
                            cy="80.049"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse cx="40.03" cy="79.235" rx="1.504" ry="1.605" />
                        <ellipse
                            cx="33.597"
                            cy="78.338"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="27.035"
                            cy="77.617"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse cx="52.099" cy="90.64" rx="2.256" ry="1.504" />
                        <ellipse
                            cx="59.073"
                            cy="91.912"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse cx="65.507" cy="92.81" rx="1.762" ry="1.605" />
                        <ellipse cx="72.069" cy="93.53" rx="1.506" ry="1.407" />
                        <ellipse
                            cx="84.664"
                            cy="90.707"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse cx="77.69" cy="89.435" rx="1.504" ry="1.605" />
                        <ellipse
                            cx="71.256"
                            cy="88.537"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="64.694"
                            cy="87.817"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse
                            cx="69.268"
                            cy="98.441"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse cx="62.293" cy="97.17" rx="1.504" ry="1.605" />
                        <ellipse cx="55.86" cy="96.272" rx="1.762" ry="1.605" />
                        <ellipse
                            cx="49.298"
                            cy="95.552"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse
                            cx="66.777"
                            cy="78.317"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse
                            cx="73.752"
                            cy="79.589"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="80.185"
                            cy="80.486"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="86.747"
                            cy="81.206"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse
                            cx="99.343"
                            cy="78.383"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse
                            cx="83.947"
                            cy="86.118"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse
                            cx="76.972"
                            cy="84.846"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="70.539"
                            cy="83.949"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="63.977"
                            cy="83.228"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse cx="93.444" cy="82.35" rx="2.256" ry="1.504" />
                        <ellipse
                            cx="90.727"
                            cy="77.943"
                            rx="2.256"
                            ry="1.504"
                        />
                        <ellipse
                            cx="100.418"
                            cy="83.622"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="97.205"
                            cy="87.982"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="86.031"
                            cy="96.049"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="92.464"
                            cy="96.947"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="99.026"
                            cy="97.667"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse
                            cx="98.214"
                            cy="92.674"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="91.652"
                            cy="91.954"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse
                            cx="79.237"
                            cy="94.544"
                            rx="1.506"
                            ry="1.407"
                        />
                        <ellipse cx="76.18" cy="98.984" rx="1.506" ry="1.407" />
                        <ellipse
                            cx="89.251"
                            cy="101.307"
                            rx="1.504"
                            ry="1.605"
                        />
                        <ellipse
                            cx="82.818"
                            cy="100.409"
                            rx="1.762"
                            ry="1.605"
                        />
                        <ellipse
                            cx="90.643"
                            cy="87.262"
                            rx="1.506"
                            ry="1.407"
                        />
                    </g>
                    <g id="leftDog">
                        <path
                            d="M-4,63l9.287,-0.388l0.617,18.264l5.938,0.572l1.687,-18.857l7.546,-0.346l-1.061,19.917l6.044,-0.369l2.648,-22.59l18.366,-0.064l0.223,-5.701l-15.097,-3.789l0.021,-7.449l-5.61,-0.188l-3.108,-5.711l-3.135,5.126l-3.933,-3.66l-2.378,4.949l-18.055,0.284l0,20Z"
                            style={{ fill: ColorThemes[this.props.color].dogs }}
                        />
                        <path
                            d="M26.609,42.012l5.477,-1.134"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M26.517,41.777l-3.597,-6.025l-2.796,5.996l-3.66,-4.64c-0,-0 -2.099,5.207 -2.73,5.708c-0.632,0.501 -16.734,0.184 -16.734,0.184"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M-1,63l6.601,-0.442c0,0 -0.028,17.738 0.333,18.56c0.362,0.823 4.382,0.774 5.531,0.332c1.149,-0.442 0.911,-18.42 1.822,-19.187c0.91,-0.768 7.166,-0.592 7.639,-0.145c0.474,0.448 -2.126,19.431 -0.876,19.723c1.25,0.292 5.537,0.583 5.957,-0.324c0.421,-0.908 2.273,-22.697 2.273,-22.697c-0,0 18.097,1.201 18.926,0.124c0.828,-1.077 0.468,-5.398 -0.22,-5.743c-0.687,-0.345 -16.22,-3.265 -16.22,-3.265"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            id="leftDogMouth"
                            d="M30.764,49.787l12.437,-9.798l-2.915,-3.867l-13.723,6.034"
                            style={{
                                fill: ColorThemes[this.props.color].dogs,
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                    </g>
                    <g id="rightDog">
                        <path
                            d="M101.652,45.594l-8.375,-0.489l-1.609,-4.468l-3.448,3.597l-3.303,-2.784l-2.474,4.046l-6.365,-1.767l-0.554,8.68l-11.924,-1.409l-1.922,5.113l17.803,9.528l-4.934,15.909l3.766,2.319l9.04,-15.103l3.395,0.072l-1.721,13.275l4.447,1.528l4.243,-12.77l3.839,0.259l0.096,-25.536Z"
                            style={{ fill: ColorThemes[this.props.color].dogs }}
                        />
                        <path
                            d="M76.529,42.524l5.914,2.972"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M100.846,45.433l-7.713,-0.252l-1.421,-5.929l-3.847,5.388l-2.496,-3.99l-2.958,4.821"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M75.724,52.678l-12.027,-2.175l-2.415,5.657l18.638,9.317c0,0 -6.001,14.929 -5.79,16.059c0.21,1.129 3.123,2.074 4.413,1.719c1.291,-0.355 8.609,-14.701 8.609,-14.701l3.95,0.217c0,0 -2.956,12.396 -2.378,13.509c0.578,1.112 3.96,1.859 5.063,1.506c1.103,-0.353 3.208,-10.816 3.393,-12.357c0.186,-1.541 3.801,-0.348 3.801,-0.348"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            id="rightDogMouth"
                            d="M75.921,52.579c0,0 -8.032,-11.393 -7.743,-12.416c0.289,-1.023 1.707,-2.976 2.81,-2.91c1.103,0.066 11.523,8.232 11.523,8.232"
                            style={{
                                fill: ColorThemes[this.props.color].dogs,
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                    </g>
                    <g id="leftBark">
                        <path
                            d="M48.003,42.009l3.354,-2.937l-3.354,2.937Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M48.659,45.574l4.244,-1.806l-4.244,1.806Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M48.526,48.58l3.676,-0l-3.676,-0Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g id="rightBark">
                        <path
                            d="M60.789,45.989l-3.722,-1.145l3.722,1.145Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M61.626,42.321l-4.694,-2.474l4.694,2.474Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M63.142,39.595l-1.778,-3.149l1.778,3.149Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M65.765,36.865l-1.061,-2.625l1.061,2.625Z"
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

export default Dogs;
