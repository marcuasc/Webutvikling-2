import React from "react";
import "./ArtDisplay.css";
import RadiantBaby from "./ArtWorks/RadiantBaby";
import Snake from "./ArtWorks/Snake";
import Heart from "./ArtWorks/Heart";
import Football from "./ArtWorks/Football";
import Earth from "./ArtWorks/Earth";
import Dogs from "./ArtWorks/Dogs";
import DJ from "./ArtWorks/DJ";
import Dance from "./ArtWorks/Dance";
import CrackDown from "./ArtWorks/CrackDown";
import BestBuddies from "./ArtWorks/BestBuddies";
import WebContext, { WebContextInterface } from "../../WebContext";

const ArtDisplay: React.FunctionComponent = () => {
    const values: WebContextInterface = React.useContext(WebContext);

    const artWorks = [
        <BestBuddies color={values.color} />,
        <CrackDown color={values.color} />,
        <Dance color={values.color} />,
        <DJ color={values.color} />,
        <Dogs color={values.color} />,
        <Earth color={values.color} />,
        <Football color={values.color} />,
        <Heart color={values.color} />,
        <RadiantBaby color={values.color} />,
        <Snake color={values.color} />,
    ];

    function saveValues(index: number) {
        window.sessionStorage.setItem(
            "artwork" + index,
            JSON.stringify(values)
        );
    }

    function loadValues(index: number) {
        let valueString = window.sessionStorage.getItem("artwork" + index);
        if (valueString !== null) {
            let parsedValues = JSON.parse(valueString);
            values.updateColor(parsedValues.color);
            values.updateSound(parsedValues.sound);
            values.updatePoetry(parsedValues.poetry);
        }
    }

    function next() {
        saveValues(values.index);
        if (values.index === artWorks.length - 1) {
            values.updateIndex(0);
            loadValues(0);
        } else {
            const newIndex = values.index + 1;
            values.updateIndex(newIndex);
            loadValues(newIndex);
        }
    }

    function previous() {
        saveValues(values.index);
        if (values.index === 0) {
            values.updateIndex(artWorks.length - 1);
            loadValues(artWorks.length - 1);
        } else {
            const newIndex = values.index - 1;
            values.updateIndex(newIndex);
            loadValues(newIndex);
        }
    }

    return (
        <div id="artContainer">
            {artWorks[values.index]}
            <div id="buttons">
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default ArtDisplay;
