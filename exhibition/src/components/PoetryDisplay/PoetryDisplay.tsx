import React, { useEffect } from "react";
import WebContext, { WebContextInterface } from "../../WebContext";
import "./PoetryDisplay.css";

// Defines the list of poems
let input = [
    "https://poetrydb.org/title/A Fragment: To Music/lines.json",
    "https://poetrydb.org/title/Fragment: 'The Death Knell Is Ringing'/lines.json",
    "https://poetrydb.org/title/Dying at my music!/lines.json",
];

const PoetryDisplay: React.FunctionComponent = () => {
    // Import the context values
    const values: WebContextInterface = React.useContext(WebContext);
    // Declares data as a list of strings in the components state
    let [data, setData] = React.useState([""]);

    // useEffect triggers when the component loads and when values.poetry updates.
    useEffect(() => {
        // sets data to loading
        setData(["Loading poem..."]);
        // fetches from poetryDB on the current poetry value
        fetch(input[values.poetry])
            .then((response) => response.json())
            .then((poem) => {
                setData(poem[0].lines);
            });
    }, [values.poetry]);

    // gets the text from data and puts it in a string and returns it
    function getText() {
        let text = "";
        for (let e in data) {
            text += data[e] + " ";
        }
        return text;
    }

    return (
        <div>
            <p>{getText()}</p>
        </div>
    );
};

export default PoetryDisplay;
