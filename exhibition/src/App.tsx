import React from "react";
import "./App.css";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import PoetryDisplay from "./components/PoetryDisplay/PoetryDisplay";
import AudioDisplay from "./components/AudioDisplay/AudioDisplay";

function App() {
    return (
        <div className="App">
            <div id="Main">
                <div id="artworks">
                    <ArtDisplay />
                    {/* <Controls /> */}
                </div>
                <div id="controls">
                    <AudioDisplay />
                </div>
                <div id="poetry">
                    <PoetryDisplay />
                </div>
            </div>
        </div>
    );
}

export default App;