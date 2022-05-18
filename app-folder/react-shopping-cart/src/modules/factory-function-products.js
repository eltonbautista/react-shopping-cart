// A factory function responsible for creating my product objects.
import Product from "../components/product-components/Product";

const factoryFunctionProducts = (productName, productCategory, productPrice, imgSrc, imgAlt, isInCart) => {
  const initialPrice = parseFloat(productPrice);
  let newPrice;

  const isInCartFunction = function(bool) {
    return this.isInCart = bool;
  };

  const incrementQuantity = function() {
    this.productPrice += initialPrice;
    return this.quantity += 1;
  };

  const decrementQuantity = function() {
    this.productPrice -= initialPrice;
    return this.quantity -= 1;
  };

  return {
    productName,
    productCategory,
    productPrice,
    imgSrc,
    imgAlt,
    isInCart,
    isInCartFunction,
    quantity : 0,
    incrementQuantity,
    decrementQuantity
  }
}
// const firstProduct = <Product productObject={factoryFunctionProducts('death bolt', 'Damage', 329.99, 'url', 'black lightning', false)} />
// const secondProduct = factoryFunctionProducts('heavenly grace', 'this is heavenly', 420.69, 'url', 'graces from heaven', false)


const arrayOfProducts =
 [
   [<Product productObject={factoryFunctionProducts("Men's Blue Jacket", "Men's", 69.99, '' )} />],
   [],
 ]

//  const [mens, womens] = arrayOfProducts;

export default factoryFunctionProducts;
export { arrayOfProducts };
