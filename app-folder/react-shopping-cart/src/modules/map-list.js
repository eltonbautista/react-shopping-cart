import styles from '../modules/styling-modules/ShoppingCart.module.css';
// Simple helper function to map my products with the appropriate elements.
const mapList = (arrayToMap, category, bool) => {

  return arrayToMap.map((product) => {
    return (
      <li className={styles['product-list']} key={category + arrayToMap.indexOf(product)}>
        {product}
        {/* This conditional allows me to create an input element */}
        {/* This is used in ShoppingCart component / Cart page. */}
        {/* Initially I added an object method to productObject to return a JSX of an input */}
        {/* This was working, but it persisted onto the Product pages, and not only in Cart page where it should belong */}
        {bool ? 
        <div className={styles['cart-input-div']}>
          <label>Quantity:{' '}
          <input
          className={"quantity-input"} 
          data-num-id={product.props.num} 
          onChange={product.props.onChange} 
          placeholder={product.props.productObject.quantity}
          value={product.props.productObject.quantity}
          min={1} 
          type={'number'}>
          </input>
          </label>
        </div> : null
    }
      </li>
    );
  });

}

export default mapList;