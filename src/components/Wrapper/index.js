import React from "react";
import "./style.css";

//Wrapper function to pass all props to children
function Wrapper(props) {
  return <main className="wrapper p-0">{props.children}</main>;
}

export default Wrapper;
