import React from "react";
import "./Button.css";

interface ButtonProps {
    text: string;
    function(): void;
}

class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button className="button" onClick={this.props.function}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
