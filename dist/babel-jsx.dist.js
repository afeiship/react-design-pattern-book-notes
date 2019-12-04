"use strict";

// npx babel src/02-chapter/babel-jsx.js -o dist/babel-jsx.dist.js

function render() {
  return React.createElement(
    "div",
    { "class": "abc" },
    React.createElement(
      "label",
      null,
      "label"
    ),
    React.createElement("input", { type: "text" })
  );
}
