import React from "react";
import "./ArtDisplay.css";
import "./ArtWorks/RadiantBaby";
import RadiantBaby from "./ArtWorks/RadiantBaby";
import BestBuddies from "./ArtWorks/BestBuddies";
import Dogs from "./ArtWorks/Dogs";
import DJ from "./ArtWorks/DJ";
import CrackDown from "./ArtWorks/CrackDown";
import Earth from "./ArtWorks/Earth";
import Football from "./ArtWorks/Football";
import Heart from "./ArtWorks/Heart";
import Snake from "./ArtWorks/Snake";
import Dance from "./ArtWorks/Dance";

class ArtDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            artworks: [
                <Dance />,
                <Snake />,
                <Heart />,
                <Football />,
                <Earth />,
                <CrackDown />,
                <DJ />,
                <RadiantBaby />,
                <BestBuddies />,
                <Dogs />,
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
