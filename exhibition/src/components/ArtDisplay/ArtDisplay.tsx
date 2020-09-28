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
import Button from "../Button/Button";

const ArtDisplay: React.FunctionComponent = () => {
    // Gets the values from the context
    const values: WebContextInterface = React.useContext(WebContext);

    // Sets artworks to a list with all the artworks. Sends the context value for color as a prop
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

    // Helping function to save the current values to session storage for each artwork
    function saveValues(index: number) {
        window.sessionStorage.setItem(
            "artwork" + index,
            JSON.stringify(values)
        );
    }

    // Helping function to load the values for the current artwork if they exist.
    function loadValues(index: number) {
        let valueString = window.sessionStorage.getItem("artwork" + index);
        if (valueString !== null) {
            let parsedValues = JSON.parse(valueString);
            values.updateColor(parsedValues.color);
            values.updateSound(parsedValues.sound);
            values.updatePoetry(parsedValues.poetry);
        }
    }

    // Function for updating context with the next artworks index. Saves and loads values for current and next artwork
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

    // Function for updating context with the previous artworks index. Saves and loads values for current and previous artwork
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

    // Renders the artwork on the current index and buttons for next and previous
    return (
        <div id="artContainer">
            {artWorks[values.index]}
            <div id="buttonsContainer">
                <Button function={previous} text="Previous" />
                <Button function={next} text="Next" />
                {/* <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button> */}
            </div>
        </div>
    );
};

export default ArtDisplay;
