import React from "react";
import WebContext, { WebContextInterface } from "../../WebContext";
import "./AudioDisplay.css";

let input = [
    "./resources/AudioFiles/alien.mp3",
    "./resources/AudioFiles/birds.mp3",
    "./resources/AudioFiles/waterfall.mp3",
];

const AudioDisplay: React.FunctionComponent = () => {
    const values: WebContextInterface = React.useContext(WebContext);

    return (
        <div id="audioDisplay">
            <audio src={input[values.sound]} controls autoPlay />
        </div>
    );
};

// class AudioDisplay extends React.Component<AppProps, AppState> {
//     constructor(props: AppProps) {
//         super(props);
//         this.state = {
//             currentIndex: 0,
//             audioFiles: [],
//         };
//     }

//     render() {
//         return (
//             <div id="audioDisplay">
//                 <audio src={input[2]} controls autoPlay />
//             </div>
//         );
//     }
// }

export default AudioDisplay;
