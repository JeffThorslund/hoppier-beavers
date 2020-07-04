import React from "react";

function Images(props) {
  return (
    <div className="Images">
      <img src={`${props.beaverUrl}`} height="150px" alt="beaver" />
      <img
        src={`${props.product.variants[0].featured_image.src}`}
        alt="product"
        height="150px"
      />
    </div>
  );
}

export default Images;
