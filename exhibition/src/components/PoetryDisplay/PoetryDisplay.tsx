import React, { useEffect } from "react";
import WebContext, { WebContextInterface } from "../../WebContext";
import "./PoetryDisplay.css";

// Defines the list of poems
let poems = [
    // BestBuddies
    [
        "https://poetrydb.org/title/Song—Love in the Guise of Friendship",
        "https://poetrydb.org/title/Fragment: To a Friend Released From Prison",
        "https://poetrydb.org/title/Impromptu, in Reply to a Friend",
    ],
    // CrackDown
    [
        "https://poetrydb.org/title/A Flower will not trouble her, it has so small a Foot",
        "https://poetrydb.org/title/When We Two Walked",
        "https://poetrydb.org/title/Fragment: 'And That I Walk Thus Proudly Crowned'",
    ],
    // Dance
    [
        "https://poetrydb.org/title/The Baby's Dance",
        "https://poetrydb.org/title/The Night Dance",
        "https://poetrydb.org/title/395. Sonnet on the Author’s Birthday",
    ],
    // DJ
    [
        "https://poetrydb.org/title/A Fragment: To Music",
        "https://poetrydb.org/title/Another Fragment: To Music",
        "https://poetrydb.org/title/Away With Funeral Music",
    ],
    // Dogs
    [
        "https://poetrydb.org/title/To a Lady with an Unruly and Ill-mannered Dog Who Bit several Persons of Importance",
        "https://poetrydb.org/title/Inscription on the Monument of a Newfoundland Dog",
        "https://poetrydb.org/title/421. Epitaph on a Lap-dog",
    ],
    // Earth
    [
        "https://poetrydb.org/title/Earth's Answer",
        "https://poetrydb.org/title/Earth's Eternity",
        "https://poetrydb.org/title/Holy Sonnet VII: At The Round Earth's Imagined Corners Blow",
    ],
    // Football
    [
        "https://poetrydb.org/title/Sonnet 36: Let me confess that we two must be twain",
        "https://poetrydb.org/title/Bliss is the plaything of the child --",
        "https://poetrydb.org/title/The Charity Ball",
    ],
    // Heart
    [
        "https://poetrydb.org/title/123. Lines to an Old Sweetheart",
        "https://poetrydb.org/title/For largest Woman's Hearth I knew",
        "https://poetrydb.org/title/His Heart was darker than the starless night",
    ],
    //RadiantBaby
    [
        "https://poetrydb.org/title/Baby Charley.",
        "https://poetrydb.org/title/The Child Is Father To The Man",
        "https://poetrydb.org/title/To a Young Child",
    ],
    // Snake
    [
        "https://poetrydb.org/title/Lucifer in Starlight",
        "https://poetrydb.org/title/Sonnet LXI: Since There's No Help",
        "https://poetrydb.org/title/The Frightened Ploughman",
    ],
];

const PoetryDisplay: React.FunctionComponent = () => {
    // Import the context values
    const values: WebContextInterface = React.useContext(WebContext);
    // Declares data as a list of strings in the components state
    let [data, setData] = React.useState({
        author: "",
        title: "",
        lines: [""],
    });

    // useEffect triggers when the component loads and when values.poetry updates.
    useEffect(() => {
        // sets data to loading
        setData({
            author: "loading",
            title: "loading",
            lines: ["loading"],
        });
        // fetches from poetryDB on the current poetry and index value
        fetch(poems[values.index][values.poetry])
            .then((response) => response.json())
            .then((poem) => {
                // Sets the data to the correct params
                setData({
                    author: poem[0].author,
                    title: poem[0].title,
                    lines: poem[0].lines,
                });
            });
    }, [values.poetry, values.index]);

    return (
        <p>
            {/* Puts the title and author in corresponding spans */}
            <span className="bold">{data.title}</span>
            <br />
            <span className="cursive">{data.author}</span>
            <br />

            {/* gets the lines from data and puts them in a span element with br */}
            {data.lines.map((line, index) =>
                line !== "" ? (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ) : (
                    ""
                )
            )}
        </p>
    );
};

export default PoetryDisplay;
