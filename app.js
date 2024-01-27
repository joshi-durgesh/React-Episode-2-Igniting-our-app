//using react
//
//creating element
const content = React.createElement("div", {}, [
  React.createElement(
    "h1",
    {},
    "This heading is created with React through CDN"
  ),
  React.createElement("p", {}, "this paragraph is created with react"),
]);

//creating root
const root = ReactDOM.createRoot(document.getElementById("container"));

//rendering our element in root
root.render(content);
