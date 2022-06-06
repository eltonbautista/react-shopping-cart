import { mensProducts, womensProducts } from './preload';


// A factory function responsible for creating my product objects.
const factoryFunctionProducts = (productName, productCategory, productTotal, imgSrc, imgAlt, isInCart) => {
  // Make sure price is a number
  const productPrice = parseFloat(productTotal.toFixed(2));

  // Toggles isInCart property to true or false
  const isInCartFunction = function() {
    !this.isInCart ? this.isInCart = true : this.isInCart = false;
    return this.isInCart;
  };

  // Method used for setting quantity state in <RouteSwitch /> if user deletes input then quantity is defaulted to 1
  const setQuantity = function(quant = 1) {
    if (isNaN(quant)) {
      this.productTotal = 0;
      return this.quantity = '';
    };

    this.productTotal = productPrice * quant;
    this.quantity = quant;
    return quant;
  };
  
  return {
    productName,
    productCategory,
    productTotal,
    imgSrc,
    imgAlt,
    isInCart,
    isInCartFunction,
    quantity: '',
    productPrice,
    setQuantity,

  }
}
// NEED TO DRY
const arrayOfProducts =
 [
   [
    
    factoryFunctionProducts("Men's Blue Jacket", "Men's", 69.99, mensProducts[0].src, 'young man in blue-jacket', false ),
    
    factoryFunctionProducts("Men's Crewneck", "Men's", 39.99, mensProducts[1].src, 'young man in crewneck', false ),
    
    factoryFunctionProducts("Men's Shirt", "Men's", 19.99, mensProducts[2].src, 'man in green shirt', false ),
    
    factoryFunctionProducts("Men's Hoodie", "Men's", 49.99, mensProducts[3].src, 'young man in hoodie', false ),
    
    factoryFunctionProducts("Men's Suit", "Men's", 129.99, mensProducts[4].src, 'young man in suit', false ),
    
    factoryFunctionProducts("Men's White Pants", "Men's", 59.99, mensProducts[5].src, 'young man in white pants', false ),
    
    factoryFunctionProducts("Men's Bracelet", "Men's", 29.99, mensProducts[6].src, 'bracelet', false ),
    
    factoryFunctionProducts("Men's Leather Pouch", "Men's", 59.99, mensProducts[7].src, 'accessories and leather pouch', false ),
    
    factoryFunctionProducts("Men's Watch", "Men's", 69.99, mensProducts[8].src, 'men\'s watch', false )
   ],
   [
     
     factoryFunctionProducts("Women's Black Tank", "Women's", 19.99, womensProducts[0].src, 'young woman in black tanktop', false ),
     
     factoryFunctionProducts("Women's Blazer", "Women's", 69.99, womensProducts[1].src, 'young woman in orange blazer', false ),
     
     factoryFunctionProducts("Women's Button-Up", "Women's", 39.99, womensProducts[2].src, 'young woman in button-up', false ),
     
     factoryFunctionProducts("Women's Denim Jacket", "Women's", 49.99, womensProducts[3].src, 'young woman in denim jacket', false ),
     
     factoryFunctionProducts("Women's Shirt", "Women's", 21.99, womensProducts[4].src, 'young woman in shirt', false ),
     
     factoryFunctionProducts("Women's Denim Shorts", "Women's", 39.99, womensProducts[5].src, 'young woman in denim shorts', false ),
     
     factoryFunctionProducts("Women's Gold Chain", "Women's", 49.99, womensProducts[6].src, 'women\'s gold chain', false ),
     
     factoryFunctionProducts("Women's Hand Chain", "Women's", 39.99, womensProducts[7].src, 'hand with chain', false ),
     
     factoryFunctionProducts("Women's Watch", "Women's", 39.99, womensProducts[8].src, 'women\'s watch', false ),
    ],
 ]


export default factoryFunctionProducts;
export { arrayOfProducts };
