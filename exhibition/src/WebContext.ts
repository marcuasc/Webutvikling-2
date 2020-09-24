import React, { createContext, useState } from "react";

export const WebContext = createContext(undefined);

export const WebProvider = () => {
  const [states, setStates] = useState({
    sound: 1,
    color: 1,
    poetry: 1,
  });
};

export default WebContext;
