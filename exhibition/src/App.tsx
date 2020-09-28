import React from "react";
import "./App.css";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import PoetryDisplay from "./components/PoetryDisplay/PoetryDisplay";
import AudioDisplay from "./components/AudioDisplay/AudioDisplay";
import FrontPage from "./components/FrontPage/FrontPage";
import ControlDisplay from "./components/ControlDisplay/ControlDisplay";
import WebContext, { WebContextInterface } from "./WebContext";

function App() {
    // Declares vars for color, sound, poetry and index
    let st, ct, pt, it: number;
    // Checks if they exist in local storage. If they do, set them to that value. If not, set them to 0
    if (localStorage.getItem("color") === null) {
        ct = 0;
    } else {
        ct = parseInt(localStorage.getItem("color") as string);
    }
    if (localStorage.getItem("sound") === null) {
        st = 0;
    } else {
        st = parseInt(localStorage.getItem("sound") as string);
    }
    if (localStorage.getItem("poetry") === null) {
        pt = 0;
    } else {
        pt = parseInt(localStorage.getItem("poetry") as string);
    }
    if (localStorage.getItem("index") === null) {
        it = 0;
    } else {
        it = parseInt(localStorage.getItem("index") as string);
    }

    // Sets the vars as global state vars and methods to update them
    const [sound, setSound] = React.useState(st);
    const [color, setColor] = React.useState(ct);
    const [poetry, setPoetry] = React.useState(pt);
    const [index, setIndex] = React.useState(it);

    return (
        // Sends the values as global state vars and the methods to update them
        <WebContext.Provider
            value={{
                sound: sound,
                color: color,
                poetry: poetry,
                index: index,
                updateSound: setSound,
                updateColor: setColor,
                updatePoetry: setPoetry,
                updateIndex: setIndex,
            }}
        >
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
        </WebContext.Provider>
    );
}

export default App;
