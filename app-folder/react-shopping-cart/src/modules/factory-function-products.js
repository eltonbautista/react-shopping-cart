// A factory function responsible for creating my product objects.

const factoryFunctionProducts = (name, description, price, imgSrc, imgAlt, isInCart) => {

  const isInCartFunction = function(bool) {
    return this.isInCart = bool;
  };

  const incrementQuantity = function() {
    return this.quantity += 1;
  };

  const decrementQuantity = function() {
    return this.quantity -= 1;
  };

  return {
    name,
    description,
    price: `$${price}`,
    imgSrc,
    imgAlt,
    isInCart,
    isInCartFunction,
    quantity : 0,
    incrementQuantity,
    decrementQuantity
  }
}



const arrayOfProducts =
 [
   [factoryFunctionProducts('death bolt', 'this is deadly', 329.99, 'url', 'black lightning', false),
    factoryFunctionProducts('death bolt', 'this is deadly', 329.99, 'url', 'black lightning', false) ],
   [],
   [],
 ]

//  const [damage, cultivation, movement] = arrayOfProducts;

export default factoryFunctionProducts;
export { arrayOfProducts };
