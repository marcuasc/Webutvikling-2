import React from "react";
import WebContext, { WebContextInterface } from "../../WebContext";
import Button from "../Button/Button";
import "./ControlDisplay.css";

const ControlDisplay: React.FunctionComponent = () => {
    const values: WebContextInterface = React.useContext(WebContext);
    function handleChange1(event: React.ChangeEvent<HTMLInputElement>) {
        values.updateColor(parseInt(event.target.value));
    }

    function handleChange2(event: React.ChangeEvent<HTMLInputElement>) {
        values.updateSound(parseInt(event.target.value));
    }

    function handleChange3(event: React.ChangeEvent<HTMLInputElement>) {
        values.updatePoetry(parseInt(event.target.value));
    }

    function saveFav() {
        const { color, sound, poetry, index } = values;
        localStorage.setItem("color", JSON.stringify(color));
        localStorage.setItem("sound", JSON.stringify(sound));
        localStorage.setItem("poetry", JSON.stringify(poetry));
        localStorage.setItem("index", JSON.stringify(index));
    }

    function loadFav() {
        let st, ct, pt, it: number;
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
            <div id="favButtons">
                <Button function={saveFav} text="Legg til som favoritt" />
                <Button function={loadFav} text="Last inn favoritt" />
            </div>
        </div>
    );
};

export default ControlDisplay;
