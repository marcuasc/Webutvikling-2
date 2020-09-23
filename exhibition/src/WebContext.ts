import { blue } from "@material-ui/core/colors";
import React, { useContext, useState } from "react";

export const WebContext = React.createContext({
  Color: 0,
  Sound: 1,
  Poetry: 2,
});
