import React from "react";
import { sequence } from "just-animate";
import { addPlugin } from "just-animate";
import { waapiPlugin } from "just-animate/lib/web";

interface EarthProps {
    color: number;
}

const ColorThemes = [
    {
        background: "#C75C26",
        men: "#FFEE28",
        water: "#63AFE3",
        ground: "#69AB49",
    },
    {
        background: "#FDF900",
        men: "#A4E800",
        water: "#244E9A",
        ground: "#FE0002",
    },
    {
        background: "#8CCCD5",
        men: "#D05492",
        water: "#EA3A60",
        ground: "#FC7A00",
    },
];

class Earth extends React.Component<EarthProps> {
    constructor(props: EarthProps) {
        super(props);
        addPlugin(waapiPlugin);
    }

    animate() {
        const earthAnimation = sequence([
            {
                targets: "#earth",
                duration: 0,
                web: {
                    transformOrigin: "46px 31px",
                },
            },
            {
                targets: "#earth",
                duration: 1500,
                web: {
                    transform: [{ value: "rotate(180deg)" }],
                },
            },
            {
                targets: "#earth",
                duration: 1500,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        earthAnimation.play({
            repeat: Infinity,
        });

        const earthShineAnimation = sequence([
            {
                targets: "#earthShine",
                duration: 0,
                web: {
                    transformOrigin: "46px 31px",
                },
            },
            {
                targets: "#earthShine",
                duration: 1500,
                web: {
                    transform: [{ value: "rotate(-180deg)" }],
                },
            },
            {
                targets: "#earthShine",
                duration: 1500,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        earthShineAnimation.play({
            repeat: Infinity,
        });

        const leftManAnimation = sequence([
            {
                targets: "#leftMan",
                duration: 0,
                web: {
                    transformOrigin: "21px 100px",
                },
            },
            {
                targets: "#leftMan",
                duration: 1500,
                web: {
                    transform: [{ value: "rotate(-5deg)" }],
                },
            },
            {
                targets: "#leftMan",
                duration: 1500,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        leftManAnimation.play({
            repeat: Infinity,
        });

        const rightManAnimation = sequence([
            {
                targets: "#rightMan",
                duration: 0,
                web: {
                    transformOrigin: "81px 100px",
                },
            },
            {
                targets: "#rightMan",
                duration: 1500,
                web: {
                    transform: [{ value: "rotate(5deg)" }],
                },
            },
            {
                targets: "#rightMan",
                duration: 1500,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        rightManAnimation.play({
            repeat: Infinity,
        });
    }

    componentDidMount() {
        this.animate();
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
                        <path
                            d="M43.808,81.433l-1.624,2.328l1.624,-2.328Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M47.877,83.252l-2.544,4.846l2.544,-4.846Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M51.431,83.407l-0.226,2.461l0.226,-2.461Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M54.19,84.697l0.043,3.597l-0.043,-3.597Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M57.212,84.922l0.829,2.538l-0.829,-2.538Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g id="rightMan">
                        <path
                            d="M55.971,65.351l1.842,-1.38l-1.842,1.38Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M57.179,67.238l3.636,-0.065l-3.636,0.065Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M57.511,69.522l2.996,-0.021l-2.996,0.021Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M96.969,61.017c-0,-0 1.843,2.666 1.783,4.314"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M94.721,63.399c0,-0 2.35,4.119 1.841,7.264"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M92.543,65.859c0,-0 0.941,2.188 0.958,3.538"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M65.838,90.791c-0,0 -1.998,3.05 -1.954,5.924"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M69.213,91.87c0,0 -1.827,1.771 -1.601,4.26"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M72,101l-1,-4l7,-3l-7,-16c0,0 -13.167,4.245 -14,4c-0.833,-0.245 -7.401,-13.433 -8,-14c-4.986,-1.047 -6.081,-4.148 0,-4c1.332,-0.157 9.238,10.634 9,11c-0.238,0.366 13,-5 13,-5l10,-6l6,-8c0,0 -5.021,-4.956 -5,-6c0.136,-3.061 7.041,-7.646 5,0c0.447,1.027 6,8 6,8l-5,6c0,0 8.815,29.982 8,37c-0.815,7.018 -6,1 -6,1l-2,-5l-7,2l0,5l-9,-3Z"
                            style={{
                                fill: ColorThemes[this.props.color].men,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M76,72c0,0 -8.102,-0.912 -5,-7c4.814,-5.742 11.047,-1.145 11,4"
                            style={{
                                fill: ColorThemes[this.props.color].men,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g id="leftMan">
                        <path
                            d="M39.179,65.558l2.135,-0.247l-2.135,0.247Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M39.135,68.909l2.691,-0.577l-2.691,0.577Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M34.983,97.438c0,-0 2.563,-4.444 2.306,-6.433"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M33.044,95.438c0,-0 1.379,-2.474 1.379,-4.476"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M1.853,78.29c0,0 0.389,-4.966 1.811,-6.231"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M4.318,83.329c-0,0 -0.339,-7.302 2.779,-10.125"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M10.144,75.433c-0,-0 -2.861,3.058 -2.689,5.669"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M13,101c0,0 -7.327,-9.197 4,-27c-0.05,-0.501 -10,-6 -10,-6l4,-10c0,0 -5.068,-6.172 6,-3c0.173,0.987 -5,10 -5,10l9,4l23,5c0,0 4.611,-8.223 5,-9c1.668,-2.842 9.531,5.79 3,4c-1.504,-0.256 -5,9 -5,9l-11,-1l-10,15l6,9l-8,0l-4,-4l0,6l-7,-2Z"
                            style={{
                                fill: ColorThemes[this.props.color].men,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M24,75c0,0 -7.977,-4.58 1,-9c8.977,-4.42 11.133,7.633 7,9"
                            style={{
                                fill: ColorThemes[this.props.color].men,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g id="earth">
                        <path
                            d="M46,7c0,0 -25.248,0.254 -26,24c-0.752,23.746 24.506,23 25,23c0.494,-0 26.918,-2.465 28,-25c1.082,-22.535 -26.049,-21.667 -27,-22Z"
                            style={{
                                fill: ColorThemes[this.props.color].water,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M64.274,46.359c-0,-0 -4.387,-3.984 -6.274,-4.359c-0.486,-1.592 -0.132,-5.009 1,-6c0.408,-1.303 -2.344,-3.792 0,-5c2.344,-1.208 3.895,2.364 6,2c2.105,-0.364 1.015,-0.998 3,-1c1.985,-0.002 4.466,1.181 4.466,1.181c-0.706,4.683 -3.236,9.105 -8.192,13.178Z"
                            style={{
                                fill: ColorThemes[this.props.color].ground,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M62.064,10.547l-1.064,1.453l-3,0c0,0 1.616,2.404 0,2c-1.616,-0.404 -4.735,-0.954 -4,1c0.735,1.954 0.904,4.178 -1,4c-1.904,-0.178 -3.264,3.905 -1,4c2.264,0.095 5.151,-1.348 5,0c-0.151,1.348 -0.53,3.064 0,3c0.53,-0.064 3.472,-1.595 4,0c0.528,1.595 1.491,3.246 2,3c0.509,-0.246 1.43,-2.281 3,-2c1.57,0.281 1.637,2.363 3,1c1.363,-1.363 3.817,-2.873 3.817,-2.873c0.08,-4.762 -5.204,-13.185 -10.753,-14.58Z"
                            style={{
                                fill: ColorThemes[this.props.color].ground,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M38.308,8.257l-1.308,3.743c0,0 3.047,2.675 1,6c-2.047,3.325 -2.333,2.646 -2,4c0.333,1.354 3.571,9.995 1,9c-2.571,-0.995 -1.991,-3.161 -3,-3c-1.009,0.161 -6.706,3.14 -6,4c0.706,0.86 6.565,1.148 6,3c-0.565,1.852 -2.972,3.867 -3,6c-0.028,2.133 -0.549,5.194 -2,5c-1.451,-0.194 -1.571,-3.526 -3,-4c-1.429,-0.474 -4.394,-4.022 -2,-9c0.666,-2.557 -0.552,-2.098 -1,-3c-0.448,-0.902 1.087,-5.214 0,-5c-1.087,0.214 -1.834,-0.888 -1.834,-0.888c1.084,-7.311 11.113,-15.24 17.142,-15.855Z"
                            style={{
                                fill: ColorThemes[this.props.color].ground,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <circle cx="34.893" cy="17.456" r="0.736" />
                        <circle cx="33.617" cy="19.442" r="0.736" />
                        <circle cx="34.651" cy="21.476" r="0.736" />
                        <circle cx="33.779" cy="23.348" r="0.736" />
                        <circle cx="31.755" cy="21.733" r="0.736" />
                        <circle cx="30.312" cy="19.885" r="0.736" />
                        <circle cx="29.797" cy="17.683" r="0.736" />
                        <circle cx="24.607" cy="19.417" r="0.736" />
                        <circle cx="23.71" cy="21.5" r="0.736" />
                        <circle cx="22.605" cy="23.606" r="0.736" />
                        <circle cx="25.897" cy="23.398" r="0.736" />
                        <circle cx="26.749" cy="21.655" r="0.736" />
                        <circle cx="29.236" cy="22.614" r="0.736" />
                        <circle cx="29.153" cy="25.296" r="0.736" />
                        <circle cx="26.834" cy="26.048" r="0.736" />
                        <circle cx="25.187" cy="28.048" r="0.736" />
                        <circle cx="26.324" cy="29.943" r="0.736" />
                        <circle cx="26.327" cy="32.336" r="0.736" />
                        <circle cx="25.526" cy="35.033" r="0.736" />
                        <circle cx="24.557" cy="36.917" r="0.736" />
                        <circle cx="25.922" cy="38.949" r="0.736" />
                        <circle cx="26.203" cy="40.819" r="0.736" />
                        <circle cx="28.765" cy="40.454" r="0.736" />
                        <circle cx="28.562" cy="42.734" r="0.736" />
                        <circle cx="57.581" cy="19.699" r="0.736" />
                        <circle cx="59.497" cy="20.647" r="0.736" />
                        <circle cx="58.326" cy="22.488" r="0.736" />
                        <circle cx="60.901" cy="23.356" r="0.736" />
                        <circle cx="63.205" cy="25.908" r="0.736" />
                        <circle cx="60.005" cy="33.857" r="0.736" />
                        <circle cx="62.266" cy="34.867" r="0.736" />
                        <circle cx="62.373" cy="32.972" r="0.736" />
                        <circle cx="65.01" cy="35.522" r="0.736" />
                        <circle cx="67.544" cy="34.548" r="0.736" />
                        <circle cx="69.492" cy="33.248" r="0.736" />
                        <circle cx="69.399" cy="35.268" r="0.736" />
                        <circle cx="68.991" cy="37.112" r="0.736" />
                        <circle cx="68.214" cy="38.691" r="0.736" />
                        <circle cx="66.59" cy="39.535" r="0.736" />
                        <circle cx="66.88" cy="37.071" r="0.736" />
                        <circle cx="64.53" cy="37.806" r="0.736" />
                        <circle cx="63.92" cy="39.772" r="0.736" />
                        <circle cx="61.92" cy="39.213" r="0.736" />
                        <circle cx="61.051" cy="40.967" r="0.736" />
                        <circle cx="63.656" cy="41.921" r="0.736" />
                        <circle cx="65.794" cy="41.765" r="0.736" />
                        <circle cx="64.453" cy="44.021" r="0.736" />
                        <circle cx="68.102" cy="41.237" r="0.736" />
                        <circle cx="59.181" cy="39.936" r="0.736" />
                        <circle cx="60.415" cy="37.907" r="0.736" />
                        <circle cx="61.875" cy="36.555" r="0.736" />
                        <circle cx="63.351" cy="23.408" r="0.736" />
                        <circle cx="65.718" cy="23.97" r="0.736" />
                        <circle cx="65.113" cy="25.77" r="0.736" />
                        <circle cx="67.172" cy="26.205" r="0.736" />
                        <circle cx="69.307" cy="24.854" r="0.736" />
                        <circle cx="68.158" cy="22.767" r="0.736" />
                        <circle cx="66.148" cy="22.055" r="0.736" />
                        <circle cx="61.926" cy="21.509" r="0.736" />
                        <circle cx="63.915" cy="20.644" r="0.736" />
                        <circle cx="67.092" cy="20.019" r="0.736" />
                        <circle cx="68.967" cy="19.951" r="0.736" />
                        <circle cx="68.553" cy="18.227" r="0.736" />
                        <circle cx="64.98" cy="18.402" r="0.736" />
                        <circle cx="62.247" cy="18.402" r="0.736" />
                        <circle cx="59.132" cy="18.406" r="0.736" />
                        <circle cx="55.91" cy="17.5" r="0.736" />
                        <circle cx="58.004" cy="17.075" r="0.736" />
                        <circle cx="60.774" cy="16.932" r="0.736" />
                        <circle cx="63.692" cy="16.932" r="0.736" />
                        <circle cx="66.55" cy="16.487" r="0.736" />
                        <circle cx="63.816" cy="14.633" r="0.736" />
                        <circle cx="61.879" cy="14.633" r="0.736" />
                        <circle cx="59.519" cy="14.603" r="0.736" />
                        <circle cx="57.223" cy="15.179" r="0.736" />
                        <circle cx="55.078" cy="14.757" r="0.736" />
                        <circle cx="64.303" cy="13.174" r="0.736" />
                        <circle cx="61.652" cy="12.711" r="0.736" />
                        <circle cx="66.326" cy="14.069" r="0.736" />
                        <circle cx="70.674" cy="22.336" r="0.736" />
                        <circle cx="59.615" cy="24.466" r="0.736" />
                        <circle cx="55.232" cy="19.829" r="0.736" />
                        <circle cx="56.69" cy="21.598" r="0.736" />
                        <circle cx="52.55" cy="20.968" r="0.736" />
                        <circle cx="28.316" cy="38.224" r="0.736" />
                        <circle cx="27.327" cy="36.516" r="0.736" />
                        <circle cx="29.952" cy="36.281" r="0.736" />
                        <circle cx="31.651" cy="37.356" r="0.736" />
                        <circle cx="30.573" cy="39.195" r="0.736" />
                        <circle cx="29.927" cy="34.09" r="0.736" />
                        <circle cx="32.454" cy="34.915" r="0.736" />
                        <circle cx="27.574" cy="34.048" r="0.736" />
                        <circle cx="28.575" cy="27.665" r="0.736" />
                        <circle cx="28.354" cy="29.696" r="0.736" />
                        <circle cx="31.774" cy="26.775" r="0.736" />
                        <circle cx="31.823" cy="24.403" r="0.736" />
                        <circle cx="34.017" cy="25.409" r="0.736" />
                        <circle cx="35.645" cy="26.882" r="0.736" />
                        <circle cx="26.852" cy="19.264" r="0.736" />
                        <circle cx="29.869" cy="15.782" r="0.736" />
                        <circle cx="26.901" cy="16.284" r="0.736" />
                        <circle cx="29.847" cy="13.703" r="0.736" />
                        <circle cx="35.261" cy="15.365" r="0.736" />
                        <circle cx="32.838" cy="16.513" r="0.736" />
                        <circle cx="34.385" cy="13.17" r="0.736" />
                        <circle cx="31.996" cy="14.052" r="0.736" />
                        <circle cx="32.669" cy="12.134" r="0.736" />
                        <circle cx="35.033" cy="11.238" r="0.736" />
                    </g>
                    <g id="earthShine">
                        <path
                            d="M17.561,37.641l-4.171,0.021l4.171,-0.021Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M19.456,42.168l-6.331,3.72l6.331,-3.72Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M21.418,46.032l-3.116,2.255l3.116,-2.255Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M21.502,54.395l4.095,-4.033l-4.095,4.033Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M26.588,55.203l2.315,-2.659l-2.315,2.659Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M33.47,54.372l-1.768,6.231l1.768,-6.231Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M38.602,55.62l-0.446,3.007l0.446,-3.007Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M43.087,61.632l1.257,-5.221l-1.257,5.221Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M47.913,59.784l0.393,-3.867l-0.393,3.867Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M53.452,55.211l1.38,4.616l-1.38,-4.616Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M59.355,53.141l0.949,3.155l-0.949,-3.155Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M64.703,50.684l3.987,4.395l-3.987,-4.395Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M70.112,49.707l-1.7,-2.057l1.7,2.057Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M71.355,43.413l3.75,3.358l-3.75,-3.358Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M74.499,39.249l2.17,1.649l-2.17,-1.649Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M75.358,34.503l5.465,0.734l-5.465,-0.734Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M75.869,30.665l3.047,0l-3.047,0Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M75.884,25.214l6.422,-0.344l-6.422,0.344Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M75.059,20.239l2.476,-1.625l-2.476,1.625Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M73.585,15.373l5.069,-3.817l-5.069,3.817Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M69.404,10.581l2.502,-2.818l-2.502,2.818Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M65.383,7.201l1.922,-5.446l-1.922,5.446Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M59.593,5.275l0.955,-3.138l-0.955,3.138Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M54.234,3.741l1.416,-5.121l-1.416,5.121Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M47.532,3.24l0.27,-2.451l-0.27,2.451Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M41.478,3.63l0.329,-6.017l-0.329,6.017Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M36.591,4.866l-1.407,-3.194l1.407,3.194Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M32.294,6.739l-2.972,-5.794l2.972,5.794Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M28.342,8.453l-1.509,-2.389l1.509,2.389Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M24.295,11.506l-6.452,-5.526l6.452,5.526Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M20.65,16.235l-3.674,-2.537l3.674,2.537Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M18.439,21.184l-6.557,-3.466l6.557,3.466Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M16.926,25.868l-3.935,-0.533l3.935,0.533Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M16.784,31.575l-8.299,-0.132"
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

export default Earth;
