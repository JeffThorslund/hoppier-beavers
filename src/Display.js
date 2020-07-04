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
      
        <div className="lead">
          <div className="piece">{props.snacker.first_name}</div>{" "}
          <div className="piece">{props.snacker.last_name}</div>{" "}
          <div className="piece"><b>{props.verb}</b></div>{" "}
          {singularChecker(title) && <div className="piece">a</div>}{" "}
          <div className="piece">{title}</div>.
        </div>
        <Images product={props.product} beaverUrl={props.beaverUrl} />
      
    </div>
  );
}

export default Display;
