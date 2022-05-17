import React from "react";

const ProductPage = (props) => {
  const { productHeading } = props;
  return (
    <div id="product-page" data-testid='product-page'>
      
      <div>
        <h1>{productHeading}</h1>
      </div>

      {/* <div className="product-page card-container"> */}
        {/* cards */}
      {/* </div> */}

    </div>
  )
}

export default ProductPage;