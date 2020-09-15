import React from "react";
import logo from "./logo.svg";
import { Remarkable } from "remarkable";
import "./App.css";

class MarkdownEditor extends React.Component {
  state = { value: "Hello, **world**!" };
  md = new Remarkable();

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  getRawMarkup = (e) => {
    return { __html: this.md.render(this.state.value) };
  };

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">Enter some markdown</label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default MarkdownEditor;
