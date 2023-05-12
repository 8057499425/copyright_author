import React from "react";
import ReactDOM from "react-dom";

const name = "HEMANT CHEEMA";

const d = new Date();
let year = d.getFullYear();

ReactDOM.render(
  <div>
    <p> created by {name}</p>
    <p> copyright {year}</p>
  </div>,
  document.getElementById("root")
);
