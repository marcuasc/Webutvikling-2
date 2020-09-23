import React from "react";
import "./PoetryDisplay.css";

let input= [
    "https://poetrydb.org/title/A Fragment: To Music/lines.json",
    'https://poetrydb.org/title/Fragment: \'The Death Knell Is Ringing\'/lines.json',
    "https://poetrydb.org/title/Dying at my music!/lines.json"
];

interface AppState {
    data: Array<any>;
}

interface AppProps {}

class PoetryDisplay extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount(): void {
        fetch(input[2])
            .then((response) => response.json())
            .then((poem) => {
                this.setState({ data: poem[0].lines });
            });
    }

    getText() {
        let text = "";
        for (let e in this.state.data) {
            text += this.state.data[e] + " ";
        }
        return text;
    }

    render() {
        return (
            <div>
                <p>{this.getText()}</p>
            </div>
        );
    }
}

export default PoetryDisplay;
