import React from "react";
import { sequence } from "just-animate";
import { addPlugin } from "just-animate";
import { waapiPlugin } from "just-animate/lib/web";

interface CrackDownProps {
    color: number;
}

// Gets number as prop for selection of color
// Declares color themes for the different elements in the SVG

const ColorThemes = [
    {
        background: "#FFD253",
        groundAndFoot: "#FF7802",
        men: "#00E1FF",
    },
    {
        background: "#8CCCD5",
        groundAndFoot: "#FE0002",
        men: "#B7BBD6",
    },
    {
        background: "#FDF900",
        groundAndFoot: "#A4E800",
        men: "#80C56A",
    },
];

class CrackDown extends React.Component<CrackDownProps> {
    constructor(props: CrackDownProps) {
        super(props);
        addPlugin(waapiPlugin);
    }

    // Function for animating elements in the svg element. Sets transformationOrigin, duration, delays and animations. Loops infinitely
    animate() {
        const footAnimation = sequence([
            {
                targets: "#foot",
                duration: 0,
                web: {
                    transformOrigin: "50px 0px",
                },
            },
            {
                targets: "#foot",
                duration: 600,
                web: {
                    transform: [{ value: "translateY(-10px)" }],
                },
            },
            {
                targets: "#foot",
                duration: 200,
                web: {
                    transform: [{ value: "translateY(0px)" }],
                },
            },
            {
                targets: "#foot",
                duration: 600,
                web: {
                    transform: [{ value: "translateY(0px)" }],
                },
            },
        ]);

        footAnimation.play({
            repeat: Infinity,
        });

        const leftPowAnimation = sequence([
            {
                targets: "#leftPow",
                duration: 0,
                web: {
                    transformOrigin: "16px 63px",
                },
            },
            {
                targets: "#leftPow",
                duration: 200,
                delay: 700,
                web: {
                    transform: [{ value: "scale(1.1) translateX(-3px)" }],
                },
            },
            {
                targets: "#leftPow",
                duration: 500,
                web: {
                    transform: [{ value: "scale(1) translateX(0px)" }],
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
                    transformOrigin: "71px 66px",
                },
            },
            {
                targets: "#rightPow",
                duration: 200,
                delay: 700,
                web: {
                    transform: [{ value: "scale(1.1) translateX(3px)" }],
                },
            },
            {
                targets: "#rightPow",
                duration: 500,
                web: {
                    transform: [{ value: "scale(1) translateX(0px)" }],
                },
            },
        ]);

        rightPowAnimation.play({
            repeat: Infinity,
        });
    }

    // Starts the animation when it mounts
    componentDidMount() {
        this.animate();
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
                        <path
                            d="M110.328,92.967l-113.983,-1.967l-0.207,12l113.983,1.967l0.207,-12Z"
                            style={{
                                fill:
                                    ColorThemes[this.props.color].groundAndFoot,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path d="M2.792,94.112c0.828,0.014 1.492,0.474 1.483,1.025c-0.01,0.552 -0.689,0.989 -1.517,0.974c-0.828,-0.014 -1.492,-0.473 -1.483,-1.025c0.01,-0.552 0.69,-0.989 1.517,-0.974Z" />
                        <path d="M7.416,94.97c0.552,0.009 0.991,0.495 0.981,1.084c-0.01,0.589 -0.466,1.06 -1.018,1.05c-0.552,-0.009 -0.992,-0.495 -0.982,-1.084c0.011,-0.589 0.467,-1.06 1.019,-1.05Z" />
                        <path d="M11.682,95.64c0.647,0.011 1.163,0.499 1.153,1.088c-0.01,0.589 -0.543,1.058 -1.19,1.047c-0.646,-0.011 -1.163,-0.499 -1.152,-1.088c0.01,-0.589 0.543,-1.058 1.189,-1.047Z" />
                        <path d="M16.034,96.326c0.552,0.01 0.994,0.437 0.985,0.953c-0.009,0.516 -0.465,0.928 -1.017,0.918c-0.553,-0.009 -0.994,-0.436 -0.985,-0.953c0.009,-0.516 0.465,-0.927 1.017,-0.918Z" />
                        <path d="M24.407,96.529c-0.828,-0.014 -1.492,-0.474 -1.483,-1.026c0.01,-0.551 0.689,-0.988 1.517,-0.974c0.828,0.015 1.492,0.474 1.483,1.026c-0.01,0.552 -0.69,0.988 -1.517,0.974Z" />
                        <path d="M19.783,95.671c-0.552,-0.009 -0.991,-0.495 -0.981,-1.084c0.01,-0.589 0.466,-1.06 1.018,-1.05c0.552,0.009 0.992,0.495 0.982,1.084c-0.011,0.589 -0.467,1.06 -1.019,1.05Z" />
                        <path d="M15.517,95.001c-0.647,-0.012 -1.163,-0.499 -1.153,-1.088c0.01,-0.589 0.543,-1.058 1.19,-1.047c0.646,0.011 1.162,0.499 1.152,1.088c-0.01,0.589 -0.543,1.058 -1.189,1.047Z" />
                        <path d="M11.165,94.315c-0.553,-0.01 -0.994,-0.437 -0.985,-0.953c0.009,-0.516 0.465,-0.928 1.017,-0.918c0.553,0.009 0.994,0.436 0.985,0.953c-0.009,0.516 -0.465,0.927 -1.017,0.918Z" />
                        <path d="M14.082,101.495c-0.827,-0.015 -1.492,-0.474 -1.482,-1.026c0.009,-0.552 0.689,-0.988 1.517,-0.974c0.828,0.014 1.492,0.474 1.482,1.026c-0.009,0.551 -0.689,0.988 -1.517,0.974Z" />
                        <path d="M9.459,100.636c-0.552,-0.009 -0.992,-0.495 -0.981,-1.084c0.01,-0.589 0.466,-1.06 1.018,-1.05c0.552,0.01 0.992,0.495 0.981,1.084c-0.01,0.589 -0.466,1.06 -1.018,1.05Z" />
                        <path d="M6.168,93.443c-0.551,-0.009 -0.991,-0.495 -0.981,-1.084c0.01,-0.589 0.466,-1.06 1.018,-1.05c0.552,0.009 0.992,0.495 0.982,1.084c-0.011,0.589 -0.467,1.06 -1.019,1.05Z" />
                        <path d="M5.193,99.966c-0.647,-0.011 -1.163,-0.498 -1.153,-1.087c0.01,-0.589 0.543,-1.059 1.189,-1.047c0.647,0.011 1.163,0.498 1.153,1.087c-0.01,0.589 -0.543,1.058 -1.189,1.047Z" />
                        <path d="M0.841,99.28c-0.553,-0.009 -0.994,-0.436 -0.985,-0.953c0.009,-0.516 0.465,-0.927 1.017,-0.918c0.552,0.01 0.994,0.437 0.985,0.953c-0.009,0.516 -0.465,0.928 -1.017,0.918Z" />
                        <path d="M19.911,97.192c0.828,0.015 1.492,0.474 1.482,1.026c-0.009,0.552 -0.689,0.988 -1.517,0.974c-0.827,-0.014 -1.492,-0.474 -1.482,-1.026c0.009,-0.551 0.689,-0.988 1.517,-0.974Z" />
                        <path d="M24.534,98.051c0.552,0.009 0.992,0.495 0.982,1.084c-0.01,0.589 -0.467,1.059 -1.019,1.05c-0.551,-0.01 -0.991,-0.496 -0.981,-1.085c0.01,-0.589 0.466,-1.059 1.018,-1.049Z" />
                        <path d="M28.801,98.721c0.646,0.011 1.163,0.498 1.153,1.087c-0.011,0.589 -0.544,1.059 -1.19,1.047c-0.646,-0.011 -1.163,-0.498 -1.153,-1.087c0.01,-0.589 0.543,-1.058 1.19,-1.047Z" />
                        <path d="M33.153,99.407c0.552,0.009 0.993,0.436 0.984,0.953c-0.008,0.516 -0.464,0.927 -1.017,0.918c-0.552,-0.01 -0.993,-0.437 -0.985,-0.953c0.009,-0.516 0.465,-0.928 1.018,-0.918Z" />
                        <path d="M41.525,99.61c-0.828,-0.014 -1.492,-0.474 -1.482,-1.026c0.009,-0.552 0.689,-0.988 1.517,-0.974c0.827,0.014 1.492,0.474 1.482,1.026c-0.009,0.552 -0.689,0.988 -1.517,0.974Z" />
                        <path d="M36.902,98.752c-0.552,-0.01 -0.992,-0.496 -0.982,-1.085c0.011,-0.589 0.467,-1.059 1.019,-1.05c0.551,0.01 0.991,0.496 0.981,1.085c-0.01,0.589 -0.466,1.059 -1.018,1.05Z" />
                        <path d="M32.635,98.081c-0.646,-0.011 -1.163,-0.498 -1.153,-1.087c0.011,-0.589 0.544,-1.058 1.19,-1.047c0.646,0.011 1.163,0.498 1.153,1.087c-0.01,0.589 -0.543,1.058 -1.19,1.047Z" />
                        <path d="M28.283,97.395c-0.552,-0.009 -0.993,-0.436 -0.984,-0.952c0.009,-0.517 0.464,-0.928 1.017,-0.919c0.552,0.01 0.993,0.437 0.985,0.953c-0.009,0.517 -0.465,0.928 -1.018,0.918Z" />
                        <path d="M40.984,96.368c-0.552,-0.01 -0.991,-0.496 -0.981,-1.085c0.01,-0.589 0.466,-1.059 1.018,-1.05c0.552,0.01 0.992,0.496 0.981,1.085c-0.01,0.589 -0.466,1.059 -1.018,1.05Z" />
                        <path d="M41.004,93.667c-0.552,-0.009 -0.991,-0.495 -0.981,-1.084c0.01,-0.589 0.466,-1.06 1.018,-1.05c0.552,0.009 0.992,0.495 0.981,1.084c-0.01,0.589 -0.466,1.06 -1.018,1.05Z" />
                        <path d="M36.718,95.697c-0.647,-0.011 -1.163,-0.498 -1.153,-1.087c0.01,-0.589 0.543,-1.058 1.189,-1.047c0.647,0.011 1.163,0.498 1.153,1.087c-0.01,0.589 -0.543,1.059 -1.189,1.047Z" />
                        <path d="M32.366,95.012c-0.553,-0.01 -0.994,-0.437 -0.985,-0.953c0.009,-0.517 0.465,-0.928 1.017,-0.918c0.553,0.009 0.994,0.436 0.985,0.952c-0.009,0.517 -0.465,0.928 -1.017,0.919Z" />
                        <path d="M28.707,94.539c-0.552,-0.01 -0.991,-0.496 -0.981,-1.085c0.01,-0.589 0.466,-1.059 1.018,-1.05c0.552,0.01 0.992,0.496 0.981,1.085c-0.01,0.589 -0.466,1.059 -1.018,1.05Z" />
                        <path d="M24.441,93.868c-0.647,-0.011 -1.163,-0.498 -1.153,-1.087c0.01,-0.589 0.543,-1.058 1.189,-1.047c0.647,0.011 1.163,0.498 1.153,1.087c-0.01,0.589 -0.543,1.058 -1.189,1.047Z" />
                        <path d="M20.089,93.182c-0.553,-0.009 -0.994,-0.436 -0.985,-0.952c0.009,-0.517 0.465,-0.928 1.017,-0.919c0.553,0.01 0.994,0.437 0.985,0.953c-0.009,0.516 -0.465,0.928 -1.017,0.918Z" />
                        <path d="M53.626,101.752c-0.552,-0.01 -0.992,-0.496 -0.981,-1.085c0.01,-0.589 0.466,-1.059 1.018,-1.05c0.552,0.01 0.991,0.496 0.981,1.085c-0.01,0.589 -0.466,1.059 -1.018,1.05Z" />
                        <path d="M49.36,101.081c-0.647,-0.011 -1.163,-0.498 -1.153,-1.087c0.01,-0.589 0.543,-1.058 1.189,-1.047c0.647,0.011 1.163,0.498 1.153,1.087c-0.01,0.589 -0.543,1.058 -1.189,1.047Z" />
                        <path d="M45.008,100.395c-0.553,-0.009 -0.994,-0.436 -0.985,-0.953c0.009,-0.516 0.465,-0.927 1.017,-0.918c0.552,0.01 0.994,0.437 0.985,0.953c-0.009,0.516 -0.465,0.928 -1.017,0.918Z" />
                        <path d="M46.535,92.168c0.828,0.014 1.492,0.474 1.482,1.026c-0.009,0.552 -0.689,0.988 -1.517,0.974c-0.827,-0.014 -1.492,-0.474 -1.482,-1.026c0.009,-0.552 0.689,-0.988 1.517,-0.974Z" />
                        <path d="M51.158,93.026c0.552,0.01 0.992,0.496 0.982,1.085c-0.011,0.589 -0.467,1.059 -1.019,1.05c-0.551,-0.01 -0.991,-0.496 -0.981,-1.085c0.01,-0.589 0.466,-1.059 1.018,-1.05Z" />
                        <path d="M55.425,93.697c0.646,0.011 1.163,0.498 1.153,1.087c-0.011,0.589 -0.544,1.058 -1.19,1.047c-0.646,-0.011 -1.163,-0.498 -1.153,-1.087c0.01,-0.589 0.543,-1.058 1.19,-1.047Z" />
                        <path d="M59.777,94.383c0.552,0.009 0.993,0.436 0.984,0.952c-0.009,0.517 -0.464,0.928 -1.017,0.919c-0.552,-0.01 -0.993,-0.437 -0.985,-0.953c0.009,-0.517 0.465,-0.928 1.018,-0.918Z" />
                        <path d="M68.149,94.586c-0.828,-0.015 -1.492,-0.474 -1.482,-1.026c0.009,-0.552 0.689,-0.988 1.517,-0.974c0.827,0.014 1.492,0.474 1.482,1.026c-0.009,0.551 -0.689,0.988 -1.517,0.974Z" />
                        <path d="M57.825,99.551c-0.828,-0.014 -1.492,-0.474 -1.483,-1.026c0.01,-0.552 0.69,-0.988 1.517,-0.974c0.828,0.015 1.493,0.474 1.483,1.026c-0.01,0.552 -0.689,0.988 -1.517,0.974Z" />
                        <path d="M53.202,98.693c-0.552,-0.01 -0.992,-0.496 -0.982,-1.085c0.01,-0.589 0.467,-1.059 1.018,-1.05c0.552,0.01 0.992,0.496 0.982,1.085c-0.01,0.589 -0.467,1.059 -1.018,1.05Z" />
                        <path d="M48.935,98.022c-0.646,-0.011 -1.163,-0.498 -1.153,-1.087c0.01,-0.589 0.544,-1.058 1.19,-1.047c0.646,0.011 1.163,0.498 1.153,1.087c-0.01,0.589 -0.544,1.059 -1.19,1.047Z" />
                        <path d="M44.583,97.336c-0.552,-0.009 -0.993,-0.436 -0.985,-0.952c0.009,-0.517 0.465,-0.928 1.018,-0.918c0.552,0.009 0.993,0.436 0.984,0.952c-0.009,0.517 -0.464,0.928 -1.017,0.918Z" />
                        <path d="M64.216,95.155c0.828,0.015 1.492,0.474 1.483,1.026c-0.01,0.552 -0.689,0.988 -1.517,0.974c-0.828,-0.014 -1.492,-0.474 -1.483,-1.026c0.01,-0.552 0.69,-0.988 1.517,-0.974Z" />
                        <path d="M62.461,92.194c0.828,0.014 1.492,0.474 1.483,1.026c-0.01,0.552 -0.69,0.988 -1.517,0.974c-0.828,-0.014 -1.493,-0.474 -1.483,-1.026c0.01,-0.552 0.689,-0.988 1.517,-0.974Z" />
                        <path d="M68.84,96.013c0.552,0.01 0.991,0.496 0.981,1.085c-0.01,0.589 -0.466,1.059 -1.018,1.05c-0.552,-0.01 -0.992,-0.496 -0.982,-1.085c0.011,-0.589 0.467,-1.059 1.019,-1.05Z" />
                        <path d="M73.106,96.684c0.647,0.011 1.163,0.498 1.153,1.087c-0.01,0.589 -0.543,1.058 -1.19,1.047c-0.646,-0.011 -1.163,-0.498 -1.152,-1.087c0.01,-0.589 0.543,-1.058 1.189,-1.047Z" />
                        <path d="M77.458,97.37c0.553,0.009 0.994,0.436 0.985,0.953c-0.009,0.516 -0.465,0.927 -1.017,0.918c-0.553,-0.01 -0.994,-0.437 -0.985,-0.953c0.009,-0.516 0.465,-0.928 1.017,-0.918Z" />
                        <path d="M85.831,97.573c-0.828,-0.014 -1.492,-0.474 -1.483,-1.026c0.01,-0.552 0.689,-0.988 1.517,-0.974c0.828,0.014 1.492,0.474 1.483,1.026c-0.01,0.552 -0.69,0.988 -1.517,0.974Z" />
                        <path d="M70.883,101.68c-0.552,-0.009 -0.992,-0.495 -0.981,-1.084c0.01,-0.589 0.466,-1.06 1.018,-1.05c0.552,0.009 0.992,0.495 0.981,1.084c-0.01,0.589 -0.466,1.06 -1.018,1.05Z" />
                        <path d="M66.617,101.01c-0.647,-0.012 -1.163,-0.499 -1.153,-1.088c0.01,-0.589 0.543,-1.058 1.189,-1.047c0.647,0.011 1.163,0.499 1.153,1.088c-0.01,0.589 -0.543,1.058 -1.189,1.047Z" />
                        <path d="M62.265,100.324c-0.553,-0.01 -0.994,-0.437 -0.985,-0.953c0.009,-0.516 0.465,-0.928 1.017,-0.918c0.552,0.009 0.994,0.436 0.985,0.952c-0.009,0.517 -0.465,0.928 -1.017,0.919Z" />
                        <path d="M81.722,98.369c0.828,0.014 1.492,0.474 1.483,1.025c-0.01,0.552 -0.689,0.989 -1.517,0.974c-0.828,-0.014 -1.492,-0.473 -1.483,-1.025c0.01,-0.552 0.69,-0.989 1.517,-0.974Z" />
                        <path d="M86.346,99.227c0.552,0.009 0.991,0.495 0.981,1.084c-0.01,0.589 -0.466,1.06 -1.018,1.05c-0.552,-0.009 -0.992,-0.495 -0.982,-1.084c0.011,-0.589 0.467,-1.06 1.019,-1.05Z" />
                        <path d="M89.409,96.604c0.552,0.01 0.992,0.496 0.982,1.085c-0.011,0.589 -0.467,1.059 -1.019,1.05c-0.552,-0.01 -0.991,-0.496 -0.981,-1.085c0.01,-0.589 0.466,-1.059 1.018,-1.05Z" />
                        <path d="M93.676,97.275c0.646,0.011 1.163,0.498 1.152,1.087c-0.01,0.589 -0.543,1.058 -1.189,1.047c-0.647,-0.011 -1.163,-0.498 -1.153,-1.087c0.01,-0.589 0.543,-1.058 1.19,-1.047Z" />
                        <path d="M98.027,97.961c0.553,0.009 0.994,0.436 0.985,0.952c-0.009,0.517 -0.464,0.928 -1.017,0.919c-0.552,-0.01 -0.994,-0.437 -0.985,-0.953c0.009,-0.516 0.465,-0.928 1.017,-0.918Z" />
                        <path d="M73.157,93.337c0.552,0.01 0.991,0.496 0.981,1.085c-0.01,0.589 -0.466,1.059 -1.018,1.05c-0.552,-0.01 -0.992,-0.496 -0.981,-1.085c0.01,-0.589 0.466,-1.059 1.018,-1.05Z" />
                        <path d="M77.423,94.008c0.647,0.011 1.163,0.498 1.153,1.087c-0.01,0.589 -0.543,1.059 -1.189,1.047c-0.647,-0.011 -1.163,-0.498 -1.153,-1.087c0.01,-0.589 0.543,-1.058 1.189,-1.047Z" />
                        <path d="M81.775,94.694c0.553,0.009 0.994,0.436 0.985,0.953c-0.009,0.516 -0.465,0.927 -1.017,0.918c-0.553,-0.01 -0.994,-0.437 -0.985,-0.953c0.009,-0.516 0.465,-0.928 1.017,-0.918Z" />
                        <path d="M88.788,93.099c0.552,0.01 0.992,0.496 0.982,1.085c-0.01,0.589 -0.467,1.059 -1.018,1.05c-0.552,-0.01 -0.992,-0.496 -0.982,-1.085c0.01,-0.589 0.467,-1.059 1.018,-1.05Z" />
                        <path d="M93.055,93.77c0.646,0.011 1.163,0.498 1.153,1.087c-0.01,0.589 -0.543,1.058 -1.19,1.047c-0.646,-0.011 -1.163,-0.498 -1.153,-1.087c0.011,-0.589 0.544,-1.058 1.19,-1.047Z" />
                        <path d="M97.407,94.456c0.552,0.009 0.993,0.436 0.985,0.952c-0.009,0.517 -0.465,0.928 -1.018,0.919c-0.552,-0.01 -0.993,-0.437 -0.984,-0.953c0.009,-0.516 0.464,-0.928 1.017,-0.918Z" />
                        <path d="M85.626,92.042c0.552,0.009 0.994,0.436 0.985,0.952c-0.009,0.517 -0.465,0.928 -1.017,0.919c-0.553,-0.01 -0.994,-0.437 -0.985,-0.953c0.009,-0.516 0.464,-0.928 1.017,-0.918Z" />
                    </g>
                    <g>
                        <path
                            d="M10.445,102.619l-0.419,-8.683l2.497,-8.141l2.675,-2.995l-0.908,-6.672l5.74,-4.219l0.884,-2.799l2.674,0.267l1.393,3.365l-5.945,4.674l1.1,4.144l3.514,-0.473l2.353,2.079l0.3,2.098l5.048,0.892l3.184,-4.995l4.752,2.046l-2.611,1.997l-2.112,6.053l-7.407,-1.353l-2.203,4.391l-1.104,6.142l-5.181,0.012l-0.422,-2.639l-3.981,0.285l-0.101,3.02l-3.72,1.504Z"
                            style={{ fill: ColorThemes[this.props.color].men }}
                        />
                        <path
                            d="M10,101c0,0 -2.636,-10.634 5.315,-18.467c0.101,0.096 -1.721,-5.859 -1.11,-6.758c0.612,-0.899 5.699,-3.94 5.699,-3.94c0,0 0.116,-4.912 3.574,-2.348c0.681,0.6 1.687,2.967 1.687,2.967c-0,0 -6.442,3.598 -6.583,4.937c-0.051,0.81 1.142,3.334 1.142,3.334"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M19.242,86.03c-0,-0 -1.851,-3.046 0.886,-4.537c2.738,-1.492 4.973,-0.009 5.472,1.099c0.498,1.107 0.352,4.167 -1.356,5.407"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M25.994,85.354l5.074,1.101c-0,-0 1.978,-4.615 3.591,-5.345c1.613,-0.729 7.693,2.108 2.173,3.593c-1.071,0.513 -1.665,6.059 -2.814,6.411c-1.149,0.352 -6.857,-1.813 -6.857,-1.813c0,-0 -4.032,4.773 -3.461,11.097c0.572,6.324 -4.592,2.347 -4.592,2.347l-0.783,-5.324l-4.174,0.215l-0.286,4.56"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M19.121,93.742c0.416,1.5 -2.365,-4.281 -3.534,-5.027"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M13.746,93.761c0,-0 4.868,-4.099 6.79,-4.821"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g>
                        <path
                            d="M55.526,100.643l4.762,-4.913l-5.526,-7.594l-6.909,2.378l-1.933,-6.457l-2.384,-1.631l1.138,-1.045l2.732,-0.681l3.005,5.014l4.141,-2.328l0.559,-3.351l2.758,-1.993l4.099,0.582l2.986,-3.912l-7.156,-6.744l3.314,-3.467l2.243,2.884l6.397,6.717l-2.767,5.295l2.452,6.685l1.74,7.755l0.966,7.096l-5.237,-0.613l-2.674,-2.682l-2.57,3.072l-6.136,-0.067Z"
                            style={{ fill: ColorThemes[this.props.color].men }}
                        />
                        <path
                            d="M54.546,101.117l5.846,-5.527c0,-0 -4.1,-6.768 -5.668,-7.232c-1.568,-0.465 -6.281,2.789 -7.264,1.882c-0.983,-0.907 -1.663,-6.588 -1.663,-6.588c0,-0 -5.779,-1.152 0.588,-3.165c1.887,-0.484 3.157,3.948 3.881,5.288c-0.022,0.583 4.078,-2.205 4.078,-2.205"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M58.457,85.741c-0,0 -7.469,-2.37 -2.115,-6.949c5.114,-4.027 7.263,3.414 6.758,4.916"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M60.987,101.022l3.298,-3.716l3.397,4.163"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M72.093,100.844c0,-0 -1.513,-15.203 -5.142,-20.799c-1.02,-1.515 3.169,-4.93 2.744,-6.349c-0.425,-1.418 -6.948,-6.345 -6.948,-6.345c0,-0 -0.087,-6.8 -5.233,0.409c0.267,1.585 7.549,6.885 7.549,6.885l-3.277,4.099"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M60.015,88.418c0,0 5.518,2.79 6.964,2.904"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M62.323,93.178c0,-0 2.319,-6.095 2.319,-7.337"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g>
                        <path
                            d="M31.195,58.947c0,-0 -13.948,13.65 3.84,20.38c17.789,6.73 23.369,-14.275 21.51,-18.03c-0.985,-1.978 -7.389,-11.021 -21.34,-4.52c0.081,0.211 -1.002,-2.873 -1.002,-2.873l-4.897,2.859l1.889,2.184Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M45.938,66.96l10.607,-10.667c0,0 0.003,-6.201 1.193,-7.608c2.29,-2.742 10.306,2.007 8.388,6.022c-1.539,2.125 -6.4,1.829 -6.716,2.45c-0.316,0.621 -12.202,12.222 -12.202,12.306c-0,0.084 -2.898,0.076 -1.27,-2.503Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M57.738,48.685c-0,0 2.266,5.967 8.388,6.022"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g id="foot">
                        <path
                            d="M8.218,-1.519l0.229,8.214l2.079,8.9l5.078,11.623l-1.915,10.015l-1.612,9.283l2.24,6.703l5.503,3.468l10.907,-3.207l6.208,-4.517l7.189,-3.951l23.204,-0.452l17.398,-2.392l4.819,-3.963l-0.121,-2.362l-1.681,-1.596l0.279,-3.37l-3.341,-3.077l-0.568,-4.321l-5.716,-0.873l-2.736,-2.461l-3.579,0.362l-1.759,-2.402l-10.415,4.849l-8.636,0.371l-0.623,-15.162l1.549,-9.397l-43.98,-0.285Z"
                            style={{
                                fill:
                                    ColorThemes[this.props.color].groundAndFoot,
                            }}
                        />
                        <path
                            d="M8.096,-1.207c0,0 -1.008,14.523 7.379,27.771c1.725,5.701 -8.738,21.05 0.39,28.225c9.129,7.176 22.202,-9.366 28.708,-9.787c6.506,-0.422 42.297,1.224 44.789,-6.243c2.492,-7.467 -15.824,-7.011 -20.828,-3.806"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M87.504,34.207c0,0 4.695,-11.821 -18.636,-3.853"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M84.328,27.53c-0,0 4.294,-10.603 -16.344,-1.118"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M78.366,22.463c0,-0 -1.161,-5.935 -12.882,1.082"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M71.917,20.274c-0,-0 0.781,-5.705 -11.6,2.465c-1.952,1.101 -9.751,-1.104 -15.764,3.643"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M50.878,23.71c-0,0 -0.794,-21.234 1.037,-26.563"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M24.964,34.375c0.841,7.426 12.658,5.433 11.746,-3.986"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M57.262,15.207c-0,-0 1.472,-6.638 1.133,-8.851"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M91.8,13.653c0,-0 3.541,1.709 3.719,6.168"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M92.133,26.002c-0,-0 1.074,-10.717 -6.838,-12.066"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M83.721,17.515c0,0 4.083,1.398 4.239,5.065"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M64.7,14.449c0,-0 1.755,-5 1.755,-6.697"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M60.259,17.671c-0,-0 3.257,-10.329 2.547,-12.902"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M2.953,16.669c-0,-0 1.254,5.881 4.522,6.727"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M5.667,13.619c0,-0 0.686,4.812 3.229,6.407"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g>
                        <g id="leftPow">
                            <path
                                d="M6.006,42.453l3.017,3.27"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M1.839,48.008l7.478,3.027"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M16.083,60.232l-12.023,-4.234"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M6.678,64.137l7.156,0.115"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M2.479,71.06l11.999,-1.915"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M4.295,76.874l7.299,-3.581"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M6.652,82.824l3.935,-3.463"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                        </g>
                        <g id="rightPow">
                            <path
                                d="M73.274,76.706l7.466,7.772"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M71.571,68.747l17.494,10.377"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M71.405,63.48l10.213,5.484"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M71.173,57.608l23.193,8.642"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M71.966,48.513l18.592,-0.761"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M72.146,52.408l14.892,2.498"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}

export default CrackDown;
