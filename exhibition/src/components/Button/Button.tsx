import React from "react";
import "./Button.css";

// Interfaces for props and state

interface ButtonProps {
    text: string;
    margin: boolean;
    function(): void;
}

interface ButtonState {
    class: string;
}

class Button extends React.Component<ButtonProps, ButtonState> {
    // sets default prop for margin to true
    public static defaultProps = {
        margin: true,
    };

    constructor(props: ButtonProps) {
        super(props);
        // Sets initial state to withMargin
        this.state = {
            class: "withMargin",
        };
    }

    // If the prop is declared as false, set state to without margin
    componentDidMount() {
        if (!this.props.margin) {
            this.setState({ class: "withoutMargin" });
        }
    }

    render() {
        return (
            <button
                className={this.state.class + " button"}
                onClick={this.props.function}
            >
                {this.props.text}
            </button>
        );
    }
}

export default Button;
