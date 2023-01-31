import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();