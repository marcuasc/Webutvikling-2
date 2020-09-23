import React from "react";
import "./App.css";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import PoetryDisplay from "./components/PoetryDisplay/PoetryDisplay";
import ControlDisplay from "./components/ControlDisplay/ControlDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PoetryDisplay />
        <ArtDisplay />
        <ControlDisplay />
      </header>
    </div>
  );
}

export default App;
