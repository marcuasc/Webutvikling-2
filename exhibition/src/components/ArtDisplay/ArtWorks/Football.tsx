import React from "react";
import { sequence } from "just-animate";
import { addPlugin } from "just-animate";
import { waapiPlugin } from "just-animate/lib/web";

interface FootballProps {
    color: number;
}

const ColorThemes = [
    {
        background: "#EF4023",
        men: "#07B2EA",
        ball: "#FFF301",
    },
    {
        background: "#8CCCD5",
        men: "#FE0002",
        ball: "#B7BBD6",
    },
    {
        background: "#FDF900",
        men: "#A4E800",
        ball: "#80C56A",
    },
];

class Football extends React.Component<FootballProps> {
    constructor(props: FootballProps) {
        super(props);
        addPlugin(waapiPlugin);
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        const ballAnimation = sequence([
            {
                targets: "#ball",
                duration: 400,
                delay: 400,
                web: {
                    transform: [{ value: "translateY(-5px)" }],
                },
            },
            {
                targets: "#ball",
                duration: 400,
                web: {
                    transform: [{ value: "translateY(0)" }],
                },
            },
        ]);

        ballAnimation.play({
            repeat: Infinity,
        });

        const leftLegAnimation = sequence([
            {
                targets: "#leftLeg",
                duration: 0,
                web: {
                    transformOrigin: "20px 57px",
                },
            },
            {
                targets: "#leftLeg",
                duration: 200,
                web: {
                    transform: [{ value: "rotate(5deg)" }],
                },
            },
            {
                targets: "#leftLeg",
                duration: 200,
                web: {
                    transform: [{ value: "rotate(-10deg)" }],
                },
            },
            {
                targets: "#leftLeg",
                duration: 200,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
            {
                targets: "#leftLeg",
                duration: 0,
                delay: 600,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        leftLegAnimation.play({
            repeat: Infinity,
        });

        const rightLegAnimation = sequence([
            {
                targets: "#rightLeg",
                duration: 0,
                web: {
                    transformOrigin: "80px 62px",
                },
            },
            {
                targets: "#rightLeg",
                duration: 200,
                web: {
                    transform: [{ value: "rotate(-5deg)" }],
                },
            },
            {
                targets: "#rightLeg",
                duration: 200,
                web: {
                    transform: [{ value: "rotate(10deg)" }],
                },
            },
            {
                targets: "#rightLeg",
                duration: 200,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
            {
                targets: "#rightLeg",
                duration: 0,
                delay: 600,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        rightLegAnimation.play({
            repeat: Infinity,
        });

        const leftPowAnimation = sequence([
            {
                targets: "#leftPow",
                duration: 0,
                web: {
                    transformOrigin: "58px 48px",
                },
            },
            {
                targets: "#leftPow",
                duration: 200,
                delay: 400,
                web: {
                    transform: [{ value: "scale(1.2)" }],
                },
            },
            {
                targets: "#leftPow",
                duration: 200,
                web: {
                    transform: [{ value: "scale(1)" }],
                },
            },
            {
                targets: "#leftPow",
                duration: 0,
                delay: 400,
                web: {
                    transform: [{ value: "scale(1)" }],
                },
            },
        ]);

        leftPowAnimation.play({
            repeat: Infinity,
        });

        const rightPowAnimation = sequence([
            {
                targets: "#rightPow",
                duration: 0,
                web: {
                    transformOrigin: "58px 48px",
                },
            },
            {
                targets: "#rightPow",
                duration: 200,
                delay: 400,
                web: {
                    transform: [{ value: "scale(1.2)" }],
                },
            },
            {
                targets: "#rightPow",
                duration: 200,
                web: {
                    transform: [{ value: "scale(1)" }],
                },
            },
            {
                targets: "#rightPow",
                duration: 0,
                delay: 400,
                web: {
                    transform: [{ value: "scale(1)" }],
                },
            },
        ]);

        rightPowAnimation.play({
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
                    <g>
                        <path
                            d="M7.906,101.127l6.402,-16.697l-10.145,-5.524l-5.442,1.894l-0.151,-82.177l10.664,-0.418l-0.7,5.682l-4.145,3.238l0.872,26.324l7.275,4.1l20.395,-24.679l5.259,0.399l2.09,4.235l-6.117,2.86l-21.769,32.298l0.655,8.626l7.314,-4.009l10.06,10.377l-9.2,-0.373l-4.114,4.546l8.136,7.518l-5.657,15.519l8.588,0.787l3.043,2.262l0,3.167l-23.313,0.045Z"
                            style={{ fill: ColorThemes[this.props.color].men }}
                        />
                        <path
                            d="M23.728,66.388l-2.295,0.518"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            id="leftLeg"
                            d="M21.434,66.905c2.335,1.752 14.431,10.269 14.431,10.269c-0,0 16.408,-12.665 11.417,-18.195c-4.01,-3.007 -10.347,5.679 -11.799,7.188c-0.869,0.615 -13.057,-9.029 -15.036,-8.717"
                            style={{
                                fill: ColorThemes[this.props.color].men,
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M-0.655,80.405c-0,0 16.552,-6.958 22.088,-13.499"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M20.447,57.45c-1.978,0.312 -14.416,9.416 -15.835,10.595"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M31,101c0,0 3.631,-6.967 -12,-6c-0.501,-0.11 7.127,-15.221 6,-16c-1.127,-0.779 -9,-7 -9,-7"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M8,101c0,0 7.968,-16.87 6,-18c-1.968,-1.13 -10,-4 -10,-4"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M9,-1c0,0 1.613,5.683 -5,8c0.224,1.544 1,26 1,26"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M-1,35c0,0 9.7,-3.711 13,2c3.3,5.711 -5.102,12.819 -7,14"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M13,38c0,0 17.896,-25.853 21,-26c4.174,-1.205 11.558,5.905 0,8c-1.873,2.473 -22,33 -22,33l0.437,8.047"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                    </g>
                    <g>
                        <path
                            d="M68.754,101.591l1.014,-3.689l12.035,-1.895l-5.041,-11.76l7.918,-9.909l-5.329,-2.498l-5.624,-0.276l5.801,-9.888l8.464,3.401l-24.123,-55.825l2.722,-3.809l3.864,-0.012l2.272,5.376l5.378,11.38l8.83,11.726l4.235,-2.394l4.598,0.328l-0.43,-10.343l-10.697,-1.645l-3.691,-4.023l1.559,-4.719l2.363,-1.109l4.63,3.778l14.692,0.175l-2.05,59.865l-5.927,1.308l-7.159,11.409l2.134,6.688l-0.888,8.162l-21.55,0.198Z"
                            style={{ fill: ColorThemes[this.props.color].men }}
                        />
                        <path
                            id="rightLeg"
                            d="M79.486,71.731c-3.452,1.049 -23.259,7.93 -26.081,3.906c-2.822,-4.024 5.549,-20.287 9.736,-19.693c4.186,0.594 0.843,9.339 -0.054,11.072c2.083,0.002 16.494,-5.356 16.494,-5.356"
                            style={{
                                fill: ColorThemes[this.props.color].men,
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M69.065,101.502c0,0 -3.476,-5.981 12.582,-5.559c0.267,-1.436 -5.237,-9.53 -5.121,-11.614c0.579,-1.476 8.323,-9.651 8.323,-9.651"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M90.168,101.174c-0,0 2.711,-9.749 -1.533,-14.658c0.922,-1.11 7.599,-11.109 7.599,-11.109"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M101.355,73.656c0,-0 -14.411,3.573 -21.869,-1.925"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M79.581,61.66l15.081,5.86"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M87.773,64.437c-0,0 -20.886,-51.414 -23.803,-54.227c-0.788,-5.418 9.713,-8.309 8.086,0.423c3.839,8.684 10.033,20.113 13.831,22.927"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M90.947,46.245c-5.601,-0.049 -10.226,-9.666 -1.986,-14.053c8.24,-4.387 13.429,8.078 9.029,11.996"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M95.954,32.198l-0.028,-11.157c-0,-0 -17.54,0.792 -14.913,-6.743c0.026,-7.195 7.65,-5.359 7.123,-0.705c2.732,0.355 13.316,0.763 13.316,0.763"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                    </g>
                    <g id="rightPow">
                        <path
                            d="M69.544,55.806l5.751,-0.423l-5.751,0.423Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M70.563,52.309l6.093,-1.688l-6.093,1.688Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M70.841,49.068l4.607,-4.228l-4.607,4.228Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M70.383,44.365l3.38,-3.508l-3.38,3.508Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                    </g>
                    <g id="leftPow">
                        <path
                            d="M49.001,39.494l-0.227,-6.29l0.227,6.29Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M45.516,41.856l-5.175,-8.734l5.175,8.734Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M44.316,47.351l-3.02,-3.907l3.02,3.907Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M42.786,50.686l-8.585,-3.69l8.585,3.69Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M42.465,53.68l-7.982,-0.175l7.982,0.175Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                    </g>
                    <path
                        id="ball"
                        d="M57.239,40.677c-0,-0 -9.025,-0.431 -8.75,8.48c0.275,8.91 8.944,6.185 9.398,6.125c0.455,-0.061 9.799,-0.952 9.239,-8.53c-0.56,-7.577 -9.376,-5.819 -9.887,-6.075Z"
                        style={{
                            fill: ColorThemes[this.props.color].ball,
                            stroke: "#000",
                            strokeWidth: "2.78px",
                        }}
                    />
                    <g>
                        <path
                            d="M61.754,31.148c0,-0 -2.262,-5.275 -1.903,-7.449"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M95.944,98.58c-0,-0 1.588,-3.105 1.588,-5.399"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M68.375,89.427c-0,-0 -5.912,-3.399 -5.157,-8.482"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M65.011,96.49c0,0 -8.366,-7.345 -7.168,-15.693"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M36.319,95.679c0,0 12.161,-12.254 10.173,-19.611"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M35.476,90.202c0,0 6.941,-7.599 5.077,-11.68"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M26.061,89.656c0,-0 8.548,-4.297 8.826,-9.062"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M7.435,93.126c0,-0 -1.323,-4.227 -0.259,-5.59"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M5.628,96.29c-0,0 -3.112,-3.873 -2.36,-6.455"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M16.661,14.399c0,0 3.709,-6.848 7.575,-6.957"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M18.168,18.994c-0,-0 7.308,-8.836 10.303,-9.815"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M38.073,28.476c-0,-0 5.173,-1.906 7.318,-5.34"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M35.409,25.941c-0,-0 7.96,-4.307 8.589,-7.291"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M95.853,6.594c-0,-0 -2.902,-3.414 -4.413,-4.315"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M85.217,4.279c0,0 5.965,1.369 7.551,4.52"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                        <path
                            d="M68.85,32.69c0,-0 -6.077,-9.041 -6.234,-12.572"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.78px",
                            }}
                        />
                    </g>
                </g>
            </svg>
        );
    }
}

export default Football;
