import React from "react";

let input = ["https://poetrydb.org/title/Ozymandias/lines.json", "https://poetrydb.org/title/\"Heavenly Father\" -- take to thee/lines.json"];

interface AppState {
    data: Array<any>;
}

interface AppProps {

}


class PoetryDisplay extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(): void {
        fetch(input[1])
            .then((response) => response.json())
            .then(poem => {
                this.setState({data: poem[0].lines})
            });
    }


    render() {
        return (
            <div>
                {this.state.data.map((item, index) => <p key={item}>{item}</p>)}
            </div>
        );

    }
}

export default PoetryDisplay;
