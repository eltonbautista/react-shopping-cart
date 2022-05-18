// A factory function responsible for creating my product objects.
import Product from "../components/product-components/Product";

const factoryFunctionProducts = (productName, productDescription, productCategory, productPrice, imgSrc, imgAlt, isInCart) => {
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
    productDescription,
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
const firstProduct = <Product productObject={factoryFunctionProducts('death bolt', 'this is deadly', 'Combat', 329.99, 'url', 'black lightning', false)} />
const secondProduct = factoryFunctionProducts('heavenly grace', 'this is heavenly', 420.69, 'url', 'graces from heaven', false)


const arrayOfProducts =
 [
   [firstProduct],
   [],
   [],
 ]

//  const [damage, cultivation, movement] = arrayOfProducts;

export default factoryFunctionProducts;
export { arrayOfProducts };
