import React from "react";
import "./textbox.css";
export default function Textbox(props) {
  return (
    <div>
      <input
        placeholder="type here.."
        name={props.name}
        value={props.textboxValue}
        onChange={props.handleChangeTextBox}
        className="inputBox"
      />
    </div>
  );
}
