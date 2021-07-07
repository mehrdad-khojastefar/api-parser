import React from "react";
import "../App.css";

function MyLabel(props) {
  return (
    <p className="my-label">
      {props.label} : {props.data}
    </p>
  );
}

export default MyLabel;
