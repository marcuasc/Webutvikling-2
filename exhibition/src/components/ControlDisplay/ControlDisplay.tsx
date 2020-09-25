import { stringify } from "querystring";
import React from "react";
import "./ControlDisplay.css";

interface IProps {}

interface IState {
    ColorTheme: number;
    SoundTheme: number;
    PoetryTheme: number;
}

class ControlDisplay extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ColorTheme: 1,
            SoundTheme: 1,
            PoetryTheme: 1,
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange1(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ ColorTheme: parseInt(event.target.value) });
    }

    handleChange2(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ SoundTheme: parseInt(event.target.value) });
    }

    handleChange3(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ PoetryTheme: parseInt(event.target.value) });
    }

    handleClick() {
        const { ColorTheme, SoundTheme, PoetryTheme } = this.state;
        localStorage.setItem("ColorTheme", JSON.stringify(ColorTheme));
        localStorage.setItem("SoundTheme", JSON.stringify(SoundTheme));
        localStorage.setItem("PoetryTheme", JSON.stringify(PoetryTheme));
    }

    componentDidMount() {
        const ct = localStorage.getItem("ColorTheme");
        const st = localStorage.getItem("SoundTheme");
        const pt = localStorage.getItem("PoetryTheme");
        this.setState({ SoundTheme: 2 });
        /*console.log(ct + "," + st + "," + pt);
    const ct1 = document.getElementById("ctSlider");
    console.log(ct1);*/
    }

    render() {
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
                        defaultValue={this.state.ColorTheme}
                        onChange={this.handleChange1}
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
                        defaultValue={this.state.SoundTheme}
                        onChange={this.handleChange2}
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
                        defaultValue={this.state.PoetryTheme}
                        onChange={this.handleChange3}
                    />
                    <ul>
                        <li>0</li>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
                <div>
                    <button className="btns" onClick={this.handleClick}>
                        Legg til som favoritt
                    </button>
                </div>
            </div>
        );
    }
}

export default ControlDisplay;
