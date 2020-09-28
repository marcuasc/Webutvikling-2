import React from "react";
import WebContext, { WebContextInterface } from "../../WebContext";
import "./ControlDisplay.css";

const ControlDisplay: React.FunctionComponent = () => {
    // Gets values from the context
    const values: WebContextInterface = React.useContext(WebContext);
    // When color slider updates, the color value in context updates
    function handleChange1(event: React.ChangeEvent<HTMLInputElement>) {
        values.updateColor(parseInt(event.target.value));
    }

    // When sound slider updates, the sound value in context updates
    function handleChange2(event: React.ChangeEvent<HTMLInputElement>) {
        values.updateSound(parseInt(event.target.value));
    }

    // When poetry slider updates, the poetry value in context updates
    function handleChange3(event: React.ChangeEvent<HTMLInputElement>) {
        values.updatePoetry(parseInt(event.target.value));
    }

    // gets the values from the current context and saves them in localstorage in JSON-format
    function saveFav() {
        const { color, sound, poetry, index } = values;
        localStorage.setItem("color", JSON.stringify(color));
        localStorage.setItem("sound", JSON.stringify(sound));
        localStorage.setItem("poetry", JSON.stringify(poetry));
        localStorage.setItem("index", JSON.stringify(index));
    }

    // Updates context with values from localstorage
    function loadFav() {
        // Declares vars
        let st, ct, pt, it: number;
        // Checks if the values in localstorage exists. Sets them to 0 otherwise
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

        //updates context with values
        values.updateColor(ct);
        values.updateSound(st);
        values.updatePoetry(pt);
        values.updateIndex(it);
    }

    return (
        <div id="controlContainer">
            <div id="ColorTheme" className="sliderContainer">
                <p>ColorTheme</p>
                <input
                    id="ctSlider"
                    className="slider"
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={values.color}
                    onChange={handleChange1}
                />
                <ul>
                    <li>0</li>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>

            <div id="SoundTheme" className="sliderContainer">
                <p>SoundTheme</p>
                <input
                    className="slider"
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={values.sound}
                    onChange={handleChange2}
                />
                <ul>
                    <li>0</li>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>

            <div id="PoetryTheme" className="sliderContainer">
                <p>PoetryTheme</p>
                <input
                    className="slider"
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={values.poetry}
                    onChange={handleChange3}
                />
                <ul>
                    <li>0</li>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
            <div>
                <button className="btns" onClick={saveFav}>
                    Legg til som favoritt
                </button>
                <button className="btns" onClick={loadFav}>
                    Last inn favoritt
                </button>
            </div>
        </div>
    );
};

export default ControlDisplay;
