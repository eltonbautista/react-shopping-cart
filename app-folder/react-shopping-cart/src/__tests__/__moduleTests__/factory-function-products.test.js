import factoryFunctionProducts from "../../modules/factory-function-products";
import { arrayOfProducts } from "../../modules/factory-function-products";
describe('Testing my product factory function', () => {
  const firstProduct = arrayOfProducts[0][0];
  const firstProductProperties = firstProduct;

  it('Checking if object has proper properties', () => {
    expect(firstProductProperties).toStrictEqual({
      productName: "Men's Blue Jacket",
      productCategory: "Men's",
      productPrice: 69.99,
      productTotal: 69.99,
      imgSrc: 'men-blue-jacket.jpg',
      imgAlt: 'young man in blue-jacket',
      isInCart: false,
      isInCartFunction: firstProductProperties.isInCartFunction,
      quantity: '',
      setQuantity: firstProductProperties.setQuantity,
    });
    
  });
  

});