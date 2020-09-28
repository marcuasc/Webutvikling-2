import React from "react";
import WebContext, { WebContextInterface } from "../../WebContext";
import "./AudioDisplay.css";

// Links to the different mp3-files used in the project
let poems = [
    // BestBuddies
    [
        "./resources/AudioFiles/laugh.mp3",
        "./resources/AudioFiles/sad.mp3",
        "./resources/AudioFiles/cheering.mp3",
    ],
    // CrackDown
    [
        "./resources/AudioFiles/hardShoes.mp3",
        "./resources/AudioFiles/march.mp3",
        "./resources/AudioFiles/walkGravel.mp3",
    ],
    // Dance
    [
        "./resources/AudioFiles/bounce.mp3",
        "./resources/AudioFiles/cartoonHop.mp3",
        "./resources/AudioFiles/tapDance.mp3",
    ],
    // DJ
    [
        "./resources/AudioFiles/DJScratch.mp3",
        "./resources/AudioFiles/boo.mp3",
        "./resources/AudioFiles/partyPeople.mp3",
    ],
    // Dogs
    [
        "./resources/AudioFiles/howl.mp3",
        "./resources/AudioFiles/labBark.mp3",
        "./resources/AudioFiles/smallBark.mp3",
    ],
    // Earth
    [
        "./resources/AudioFiles/alien.mp3",
        "./resources/AudioFiles/birds.mp3",
        "./resources/AudioFiles/waterfall.mp3",
    ],
    // Football
    [
        "./resources/AudioFiles/cheer.mp3",
        "./resources/AudioFiles/crowd.mp3",
        "./resources/AudioFiles/horn.mp3",
    ],
    // Heart
    [
        "./resources/AudioFiles/heartbeat.mp3",
        "./resources/AudioFiles/ECG.mp3",
        "./resources/AudioFiles/surgery.mp3",
    ],
    // RadiantBaby
    [
        "./resources/AudioFiles/babyTalk.mp3",
        "./resources/AudioFiles/giggle.mp3",
        "./resources/AudioFiles/musicBox.mp3",
    ],
    // Snake
    [
        "./resources/AudioFiles/rattle1.mp3",
        "./resources/AudioFiles/rattle2.mp3",
        "./resources/AudioFiles/snip.mp3",
    ],
];

const AudioDisplay: React.FunctionComponent = () => {
    // Gets the values from the context
    const values: WebContextInterface = React.useContext(WebContext);
    // Renders audio based on the value of the sound and index context
    return (
        <div id="audioDisplay">
            <audio
                src={poems[values.index][values.sound]}
                controls
                autoPlay
                muted
            />
        </div>
    );
};

export default AudioDisplay;
