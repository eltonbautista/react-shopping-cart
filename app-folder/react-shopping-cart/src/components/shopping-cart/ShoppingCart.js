import React from "react";
import mapList from "../../modules/map-list";

const ShoppingCart = (props) => {
  const { arrayState, title, total } = props;
  const cartProducts = mapList(arrayState);
  // const cartTotalPrice = cartProducts.props.productTotalPrice <= add all of these up using .reduce or something.
  const myTotal = arrayState.reduce((prev, curr) => {
    if (prev === 0) {
      return prev + arrayState[0].props.productObject.productTotal;
    }
    return prev + curr.props.productObject.productTotal;
  }, 0);

  return (
    <div id="shopping-cart-page" data-testid='shopping-cart-page'>
      <h1 className="cart title">My Shopping Cart</h1>
      <h3>{!title ? 'There are no items in your cart...' : 'Your items:'}</h3>
      <ul className="cart product-container">
        {cartProducts}
      </ul>
      <div className="cart total-price">
        {parseFloat(myTotal).toFixed(2)}
      </div>
    </div>
  );
}

export default ShoppingCart;