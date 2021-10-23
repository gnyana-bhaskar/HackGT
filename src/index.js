import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme, CSSReset, ChakraProvider} from "@chakra-ui/react";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};


function Index() {
  return(
    <ChakraProvider theme = {newTheme}>
      <CSSReset></CSSReset>
      <App />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index/>, rootElement);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
