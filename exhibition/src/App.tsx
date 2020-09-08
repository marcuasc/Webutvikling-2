import React from "react";
import "./App.css";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import PoetryDisplay from "./components/PoetryDisplay/PoetryDisplay";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ArtDisplay />
                <PoetryDisplay />
            </header>
        </div>
    );
}

export default App;
