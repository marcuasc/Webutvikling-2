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

interface IProps {}

interface IState {
    currentIndex: number;
    artworks: Array<any>;
}

class ArtDisplay extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            currentIndex: 0,
            artworks: [
                <BestBuddies />,
                <CrackDown />,
                <Dance />,
                <DJ />,
                <Dogs />,
                <Earth />,
                <Football />,
                <Heart />,
                <RadiantBaby />,
                <Snake />,
            ],
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        if (this.state.currentIndex === this.state.artworks.length - 1) {
            this.setState({ currentIndex: 0 });
        } else {
            const newCurrentIndex = this.state.currentIndex + 1;
            this.setState({ currentIndex: newCurrentIndex });
        }
    }

    previous() {
        if (this.state.currentIndex === 0) {
            this.setState({ currentIndex: this.state.artworks.length - 1 });
        } else {
            const newCurrentIndex = this.state.currentIndex - 1;
            this.setState({ currentIndex: newCurrentIndex });
        }
    }

    render() {
        return (
            <div id="artContainer" onClick={this.next}>
                {this.state.artworks[this.state.currentIndex]}
            </div>
        );
    }
}

export default ArtDisplay;
