import React from "react";
import "./App.css";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import PoetryDisplay from "./components/PoetryDisplay/PoetryDisplay";
import AudioDisplay from "./components/AudioDisplay/AudioDisplay";
import FrontPage from "./components/FrontPage/FrontPage";
import ControlDisplay from "./components/ControlDisplay/ControlDisplay";

function App() {
    return (
        <div className="App">
            <FrontPage />
            <div id="Main">
                <div id="artworks">
                    <ArtDisplay />
                </div>
                <div id="controls">
                    <AudioDisplay />
                    <ControlDisplay />
                </div>
                <div id="poetry">
                    <PoetryDisplay />
                </div>
            </div>
        </div>
    );
}

export default App;
