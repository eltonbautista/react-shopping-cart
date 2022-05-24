import styles from '../modules/styling-modules/ShoppingCart.module.css';

const mapList = (arrayToMap, category, bool) => {
  let count = 0;

  return arrayToMap.map((product) => {
    count += 1;
    return (
      <li className={styles['product-list']} key={category + arrayToMap.indexOf(product)}>
        {product}

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