import React from "react";
import Button from "../Button/Button";
import "./FrontPage.css";

interface IProps {}

interface IState {
    class: string;
}

class FrontPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            class: "showing",
        };
        this.hide = this.hide.bind(this);
    }

    hide() {
        this.setState({ class: "hiding" });
    }

    render() {
        return (
            <div id="frontPage" className={this.state.class}>
                <div id="container">
                    <img src="https://dazedimg-dazedgroup.netdna-ssl.com/1600/azure/dazed-prod/1260/8/1268443.jpg" />
                    <div>
                        <p id="introText">
                            <span>Keith Allen Haring </span>
                            was an American artist whose pop art and
                            graffiti-like work grew out of the New York City
                            street culture of the 1980s. In this project we have
                            reacreated some of his artworks in SVG format and
                            animated them.
                        </p>
                        <Button
                            function={this.hide}
                            text={"Start exhibition"}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontPage;
