import factoryFunctionProducts from "../../modules/factory-function-products";
import { arrayOfProducts } from "../../modules/factory-function-products";
describe('Testing my product factory function', () => {
  const firstProduct = arrayOfProducts[0][0];
  const firstProductProperties = firstProduct.props.productObject;
  console.log(firstProductProperties)

  it('Checking if object has proper properties', () => {
    expect(firstProductProperties).toStrictEqual({
      productName: "Men's Blue Jacket",
      productCategory: "Men's",
      productPrice: 69.99,
      imgSrc: 'men-blue-jacket.jpg',
      imgAlt: 'young man in blue-jacket',
      isInCart: undefined,
      isInCartFunction: firstProductProperties.isInCartFunction,
      quantity: 0,
      incrementQuantity: firstProductProperties.incrementQuantity,
      decrementQuantity: firstProductProperties.decrementQuantity
    });
    
  });
  
  it('Checking if object methods are working properly', () => {
    
    expect(firstProduct.props.productObject.isInCartFunction(true)).toBe(true);
    expect(firstProduct.props.productObject.incrementQuantity()).toBe(1);
    expect(firstProduct.props.productObject.decrementQuantity()).toBe(0);
    expect(firstProduct.props.productObject.decrementQuantity()).toBe(-1);
    
  });

});