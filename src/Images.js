import React from "react";

function Images(props) {
  return (
    <div>
      <img src={`${props.beaverUrl}`} height="200px" alt="beaver" />
      <img
        src={`${props.product.variants[0].featured_image.src}`}
        alt="product"
        height="200px"
      />
    </div>
  );
}

export default Images;
