import React, { useEffect } from "react";
import mapList from "../../modules/map-list";

const ShoppingCart = (props) => {
  const { myProductsArray, items, quantHandler } = props;

  // Adds a children property to productObject object... Essentially renders a child element for the <Product /> component
  // if (myProductsArray.length > 0 && typeof myProductsArray[0] === "object") {
  //   myProductsArray.forEach((product) => {
  //     product.props.productObject.children = 
  //     <div className="quantity-input-div">
  //       <label>Quantity:{' '}
  //       <input
  //         className="quantity-input" 
  //         data-num-id={product.props.num} 
  //         onChange={quantHandler} 
  //         placeholder={product.props.productObject.quantity}
  //         value={product.props.productObject.setQuantity}
  //         min={1} 
  //         type={'number'}>
  //       </input>
  //       </label>
  //   </div>
  //   });
  // }
  

    // Maps myProductsArray to be a list of components;
  const cartProducts = mapList(myProductsArray, 'inCart', 1);

  // Helper function for totaling price of all items in my cart;
  const myTotal = myProductsArray.reduce((prev, curr) => {
    return prev + curr.props.productObject.productTotal;
  }, 0);


  return (
    <div id="shopping-cart-page" data-testid='shopping-cart-page'>
      <h1 className="cart title">My Shopping Cart</h1>
      <h3>{!items ? 'There are no items in your cart...' : 'Your items:'}</h3>
      <ul className="cart product-container">
        {cartProducts}
      </ul>
      <div className="cart total-price">
        Cart Total: {parseFloat(myTotal).toFixed(2)}
      </div>
    </div>
  );
}

export default ShoppingCart;