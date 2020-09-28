import React from "react";
import WebContext, { WebContextInterface } from "../../WebContext";
import "./AudioDisplay.css";

// Links to the different mp3-files used in the project
let input = [
    "./resources/AudioFiles/alien.mp3",
    "./resources/AudioFiles/birds.mp3",
    "./resources/AudioFiles/waterfall.mp3",
];

const AudioDisplay: React.FunctionComponent = () => {
    // Gets the values from the context
    const values: WebContextInterface = React.useContext(WebContext);
    // Renders audio based on the value of the sound context
    return (
        <div id="audioDisplay">
            <audio src={input[values.sound]} controls autoPlay />
        </div>
    );
};

export default AudioDisplay;
