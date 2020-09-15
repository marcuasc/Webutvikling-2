import React from "react";

let input = [];

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
                <audio src="./resources/AudioFiles/woo.mp3" controls autoPlay/>
            </div>
        );


    }
}



export default AudioDisplay;