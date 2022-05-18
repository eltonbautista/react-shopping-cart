const factoryFunctionProducts = (name, description, price, imgSrc, imgAlt, isInCart) => {

  const isInCartFunction = function(bool) {
    return this.isInCart = bool;
  }

  return {
    name,
    description,
    price: `$${price}`,
    imgSrc,
    imgAlt,
    isInCart,
    isInCartFunction,
  }
}

// const firstProduct = factoryFunctionProducts('death bolt', 'this is deadly', 329.99, 'url', 'black lightning', false);

const arrayOfProducts =
 [
   [],
   [],
   [],
 ]

//  const [damage, cultivation, movement] = arrayOfProducts;

export default arrayOfProducts;
