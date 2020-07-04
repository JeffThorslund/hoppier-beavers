import React from "react";

function Button(props) {
  return (
    <button onClick={props.generateIndices} className="Button">
      Click Here to Generate a Beaver Facing Solution.
    </button>
  );
}

export default Button;
