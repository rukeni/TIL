const fs = require('fs');
// const App = require('./index');
const prettier = require('prettier');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function render() {
  let html = ReactDOMServer.renderToStaticMarkup(React.createElement('div', null, 'Hello, world!'));
  let htmlWDoc = "<!DOCTYPE html>" + html;
  let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
  let outputFile = "./output.html";
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

render();
