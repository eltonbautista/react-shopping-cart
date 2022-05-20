import React from "react";
import mapList from "../../modules/map-list";

const ShoppingCart = (props) => {
  const { arrayState, title } = props;
  console.log(arrayState);
  const cartProducts = mapList(arrayState);
  // const cartTotalPrice = cartProducts.props.productTotalPrice <= add all of these up using .reduce or something.

  return (
    <div id="shopping-cart-page" data-testid='shopping-cart-page'>
      <h1 className="cart title">My Shopping Cart</h1>
      <h3>{!title ? 'There are no items in your cart...' : 'Your items:'}</h3>
      <div className="cart product-container">
        {cartProducts}
      </div>
      <div className="cart total-price">
        Total price goes here
      </div>
    </div>
  );
}

export default ShoppingCart;