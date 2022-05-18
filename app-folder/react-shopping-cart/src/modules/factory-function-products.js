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

// NEED TO DRY
const arrayOfProducts =
 [
   [
    <Product productObject=
    {factoryFunctionProducts("Men's Blue Jacket", "Men's", 69.99, require('../assets/images/mens/men-blue-jacket.jpg'), 'young man in blue-jacket' )} />,
    <Product productObject=
    {factoryFunctionProducts("Men's Crewneck", "Men's", 39.99, require('../assets/images/mens/men-crewneck.jpg'), 'young man in crewneck' )} />,
    <Product productObject=
    {factoryFunctionProducts("Men's Shirt", "Men's", 19.99, require('../assets/images/mens/men-green-shirt.jpg'), 'man in green shirt' )} />,
    <Product productObject=
    {factoryFunctionProducts("Men's Hoodie", "Men's", 49.99, require('../assets/images/mens/men-hoodie.jpg'), 'young man in hoodie' )} />,
    <Product productObject=
    {factoryFunctionProducts("Men's Suit", "Men's", 129.99, require('../assets/images/mens/men-suit.jpg'), 'young man in suit' )} />,
    <Product productObject=
    {factoryFunctionProducts("Men's White Pants", "Men's", 59.99, require('../assets/images/mens/men-white-pants.jpg'), 'young man in white pants' )} />,
    <Product productObject=
    {factoryFunctionProducts("Men's Bracelet", "Men's", 29.99, require('../assets/images/mens/men-bracelet.jpg'), 'bracelet' )} />,
    <Product productObject=
    {factoryFunctionProducts("Men's Leather Pouch", "Men's", 59.99, require('../assets/images/mens/men-leather-pouch.jpg'), 'accessories and leather pouch' )} />,
    <Product productObject=
    {factoryFunctionProducts("Men's Watch", "Men's", 69.99, require('../assets/images/mens/men-watch.jpg'), 'men\'s watch' )} />
   ],
   [
     <Product productObject=
     {factoryFunctionProducts("Women's Black Tank", "Women's", 19.99, require('../assets/images/womens/women-black-tank.jpg'), 'young woman in black tanktop' )} />,
     <Product productObject=
     {factoryFunctionProducts("Women's Blazer", "Women's", 69.99, require('../assets/images/womens/women-blazer.jpg'), 'young woman in orange blazer' )} />,
     <Product productObject=
     {factoryFunctionProducts("Women's Button-Up", "Women's", 39.99, require('../assets/images/womens/women-button-up.jpg'), 'young woman in button-up' )} />,
     <Product productObject=
     {factoryFunctionProducts("Women's Denim Jacket", "Women's", 49.99, require('../assets/images/womens/women-denim-jacket.jpg'), 'young woman in denim jacket' )} />,
     <Product productObject=
     {factoryFunctionProducts("Women's Shirt", "Women's", 21.99, require('../assets/images/womens/women-shirt.jpg'), 'young woman in shirt' )} />,
     <Product productObject=
     {factoryFunctionProducts("Women's Denim Shorts", "Women's", 39.99, require('../assets/images/womens/women-shorts.jpg'), 'young woman in denim shorts' )} />,
     <Product productObject=
     {factoryFunctionProducts("Women's Gold Chain", "Women's", 49.99, require('../assets/images/womens/women-gold.jpg'), 'women\'s gold chain' )} />,
     <Product productObject=
     {factoryFunctionProducts("Women's Hand Chain", "Women's", 39.99, require('../assets/images/womens/women-hand-chain.jpg'), 'hand with chain' )} />,
     <Product productObject=
     {factoryFunctionProducts("Women's Watch", "Women's", 39.99, require('../assets/images/womens/women-watch.jpg'), 'women\'s watch' )} />,
    ],
 ]

//  const [mens, womens] = arrayOfProducts;

export default factoryFunctionProducts;
export { arrayOfProducts };
