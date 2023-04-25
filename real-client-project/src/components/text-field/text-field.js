import React from "react";
import "./text-field.css";

function TextField(props) {
  return (
    <input
      className="global-text-field"
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      style={props.style}
    />
  );
}

export default TextField;
