import React from "react";
import mapList from "../../modules/map-list";
import styles from '../../modules/styling-modules/ShoppingCart.module.css';

const ShoppingCart = (props) => {
  const { myProductsArray, items } = props;

  // Maps myProductsArray to be a list of components;
  const cartProducts = mapList(myProductsArray, 'inCart', 1);

  // Helper function for totaling price of all items in my cart;
  const myTotal = myProductsArray.reduce((prev, curr) => {
    return prev + curr.props.productObject.productTotal;
  }, 0);


  return (
    <div id="shopping-cart-page" data-testid='shopping-cart-page' className={styles['page']}>
      <h1 className="cart title">My Shopping Cart</h1>
      <h3>{!items ? 'There are no items in your cart...' : 'Your items:'}</h3>
      <ul className={styles['cart-ul']}>
        {cartProducts}
      </ul>
      <div className={styles['cart-total']}>
        Cart Total: {parseFloat(myTotal).toFixed(2)}
      </div>
      <footer>
      <span>Created with ♥ by: <a href="https://twitter.com/psychtotech" target="_blank" rel="noopener noreferrer">PsychToTech</a></span>
      </footer>
    </div>
  );
}

export default ShoppingCart;