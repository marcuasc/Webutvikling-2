import React, { useEffect } from "react";
import { updateDefaultClause } from "typescript";
import WebContext, { WebContextInterface } from "../../WebContext";
import "./PoetryDisplay.css";

let input = [
    "https://poetrydb.org/title/A Fragment: To Music/lines.json",
    "https://poetrydb.org/title/Fragment: 'The Death Knell Is Ringing'/lines.json",
    "https://poetrydb.org/title/Dying at my music!/lines.json",
];

const PoetryDisplay: React.FunctionComponent = () => {
    const values: WebContextInterface = React.useContext(WebContext);
    let [data, setData] = React.useState([]);

    useEffect(() => {
        updateData();
    }, []);

    function updateData() {
        console.log(values.poetry);
        fetch(input[values.poetry])
            .then((response) => response.json())
            .then((poem) => {
                setData(poem[0].lines);
            });
    }

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

// interface PoetryDisplayProps {
// }

// interface PoetryDisplayState {
//     data: Array<any>;
// }

// class PoetryDisplay extends React.Component<
//     PoetryDisplayProps,
//     PoetryDisplayState
// > {
//     constructor(props: PoetryDisplayProps) {
//         super(props);
//         this.state = {
//             data: [],
//         };
//     }

//     componentDidMount(): void {
//         fetch(input[1])
//             .then((response) => response.json())
//             .then((poem) => {
//                 this.setState({ data: poem[0].lines });
//             });
//     }

//     getText() {
//         let text = "";
//         for (let e in this.state.data) {
//             text += this.state.data[e] + " ";
//         }
//         return text;
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.getText()}</p>
//             </div>
//         );
//     }
// }

export default PoetryDisplay;
