import * as React from "react";

export interface WebContextInterface {
    sound: number;
    color: number;
    poetry: number;
    index: number;
    updateSound(value: number): void;
    updateColor(value: number): void;
    updatePoetry(value: number): void;
    updateIndex(value: number): void;
}

const WebContext: React.Context<WebContextInterface> = React.createContext({
    sound: 0,
    color: 0,
    poetry: 0,
    index: 0,
    updateSound: (value) => {},
    updateColor: (value) => {},
    updatePoetry: (value) => {},
    updateIndex: (value) => {},
});

export default WebContext;
