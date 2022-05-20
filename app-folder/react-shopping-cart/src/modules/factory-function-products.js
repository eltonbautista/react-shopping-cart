// A factory function responsible for creating my product objects.
import Product from "../components/product-components/Product";

const factoryFunctionProducts = (productName, productCategory, productTotal, imgSrc, imgAlt, isInCart) => {
  const productPrice = parseFloat(productTotal.toFixed(2));
  let newPrice;

  const isInCartFunction = function() {
    !this.isInCart ? this.isInCart = true : this.isInCart = false;
    return this.isInCart;
  };

  const setQuantity = function(quant = 1) {
    if (isNaN(quant)) {
      this.productTotal = productPrice;
      return this.quantity = 1;
    };

    this.productTotal = productPrice * quant;
    return this.quantity = quant;
  };

  const incrementQuantity = function() {
    this.productTotal += productPrice;
    return this.quantity = this.quantity += 1;
  };

  const decrementQuantity = function() {
    this.productTotal -= productPrice;
    return this.quantity = this.quantity -= 1;
  };

  return {
    productName,
    productCategory,
    productTotal,
    imgSrc,
    imgAlt,
    isInCart,
    isInCartFunction,
    quantity: 1,
    incrementQuantity,
    decrementQuantity,
    productPrice,
    setQuantity,

  }
}

// NEED TO DRY
const arrayOfProducts =
 [
   [
    
    factoryFunctionProducts("Men's Blue Jacket", "Men's", 69.99, require('../assets/images/mens/men-blue-jacket.jpg'), 'young man in blue-jacket', false ),
    
    factoryFunctionProducts("Men's Crewneck", "Men's", 39.99, require('../assets/images/mens/men-crewneck.jpg'), 'young man in crewneck', false ),
    
    factoryFunctionProducts("Men's Shirt", "Men's", 19.99, require('../assets/images/mens/men-green-shirt.jpg'), 'man in green shirt', false ),
    
    factoryFunctionProducts("Men's Hoodie", "Men's", 49.99, require('../assets/images/mens/men-hoodie.jpg'), 'young man in hoodie', false ),
    
    factoryFunctionProducts("Men's Suit", "Men's", 129.99, require('../assets/images/mens/men-suit.jpg'), 'young man in suit', false ),
    
    factoryFunctionProducts("Men's White Pants", "Men's", 59.99, require('../assets/images/mens/men-white-pants.jpg'), 'young man in white pants', false ),
    
    factoryFunctionProducts("Men's Bracelet", "Men's", 29.99, require('../assets/images/mens/men-bracelet.jpg'), 'bracelet', false ),
    
    factoryFunctionProducts("Men's Leather Pouch", "Men's", 59.99, require('../assets/images/mens/men-leather-pouch.jpg'), 'accessories and leather pouch', false ),
    
    factoryFunctionProducts("Men's Watch", "Men's", 69.99, require('../assets/images/mens/men-watch.jpg'), 'men\'s watch', false )
   ],
   [
     
     factoryFunctionProducts("Women's Black Tank", "Women's", 19.99, require('../assets/images/womens/women-black-tank.jpg'), 'young woman in black tanktop', false ),
     
     factoryFunctionProducts("Women's Blazer", "Women's", 69.99, require('../assets/images/womens/women-blazer.jpg'), 'young woman in orange blazer', false ),
     
     factoryFunctionProducts("Women's Button-Up", "Women's", 39.99, require('../assets/images/womens/women-button-up.jpg'), 'young woman in button-up', false ),
     
     factoryFunctionProducts("Women's Denim Jacket", "Women's", 49.99, require('../assets/images/womens/women-denim-jacket.jpg'), 'young woman in denim jacket', false ),
     
     factoryFunctionProducts("Women's Shirt", "Women's", 21.99, require('../assets/images/womens/women-shirt.jpg'), 'young woman in shirt', false ),
     
     factoryFunctionProducts("Women's Denim Shorts", "Women's", 39.99, require('../assets/images/womens/women-shorts.jpg'), 'young woman in denim shorts', false ),
     
     factoryFunctionProducts("Women's Gold Chain", "Women's", 49.99, require('../assets/images/womens/women-gold.jpg'), 'women\'s gold chain', false ),
     
     factoryFunctionProducts("Women's Hand Chain", "Women's", 39.99, require('../assets/images/womens/women-hand-chain.jpg'), 'hand with chain', false ),
     
     factoryFunctionProducts("Women's Watch", "Women's", 39.99, require('../assets/images/womens/women-watch.jpg'), 'women\'s watch', false ),
    ],
 ]


export default factoryFunctionProducts;
export { arrayOfProducts };
