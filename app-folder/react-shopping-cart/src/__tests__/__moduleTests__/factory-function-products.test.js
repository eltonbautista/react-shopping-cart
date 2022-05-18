import factoryFunctionProducts from "../../modules/factory-function-products";

describe('Testing my product factory function', () => {
  const firstProduct = factoryFunctionProducts('death bolt', 'this is deadly', 329.99, 'url', 'black lightning', false);

  it('Checking if object has proper properties', () => {
    
    expect(firstProduct).toStrictEqual({
      name: 'death bolt',
      description: 'this is deadly',
      price: '$329.99',
      imgSrc: 'url',
      imgAlt: 'black lightning',
      isInCart: false,
      isInCartFunction: firstProduct.isInCartFunction,
      quantity: 0,
      incrementQuantity: firstProduct.incrementQuantity,
      decrementQuantity: firstProduct.decrementQuantity,
    });
    
  });
  
  it('Checking if object methods are working properly', () => {
    
    expect(firstProduct.isInCartFunction(true)).toBe(true);
    expect(firstProduct.incrementQuantity()).toBe(1);
    expect(firstProduct.decrementQuantity()).toBe(0);
    expect(firstProduct.decrementQuantity()).toBe(-1);
    
  });

});