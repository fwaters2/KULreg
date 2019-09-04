import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import StateStore from "./Registration/StateStore";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {main: "#DF3E40" },
    secondary: {main: "#283895"}
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StateStore />
    </ThemeProvider>
  );
}
