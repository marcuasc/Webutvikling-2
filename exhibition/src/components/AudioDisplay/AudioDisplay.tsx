import React from "react";

let input = ["./resources/AudioFiles/alien.mp3", "./resources/AudioFiles/birds.mp3", "./resources/AudioFiles/waterfall.mp3"];

interface AppState {
    currentIndex: number;
    audioFiles: []
}

interface AppProps {
}

class AudioDisplay extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            currentIndex: 0,
            audioFiles: [],
        }
    }


    render(){
        return(
            <div>
                <audio src= {input[2]} controls autoPlay/>
            </div>
        );


    }
}



export default AudioDisplay;