import React from "react";
import Images from "./Images";

function Display(props) {
  let title = props.product.title.split(" - ")[0];

  const singularChecker = (title) => {
    const titleArr = title.split("");
    if (titleArr[titleArr.length - 1] === "s") {
      return false;
    }
    return true;
  };

  return (
    <div className="Display">
      {`${props.snacker.first_name} ${props.snacker.last_name} ${props.verb}`}
      {singularChecker(title) && <div>a</div>} {`${title}`}
      <Images product={props.product} beaverUrl={props.beaverUrl} />
      <button onClick={props.generateIndices}>
        Click to generate a beaver facing solution.
      </button>
    </div>
  );
}

export default Display;
