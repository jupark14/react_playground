import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MarkdownEditor from "./MarkdownEditor";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<MarkdownEditor />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
