import React, { useState } from 'react';
import './index.css';
import App from './App';
import Homepage from './components/homepage/Homepage';
import ProductPage from './components/product-components/ProductPage';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductContainer from './components/product-components/ProductContainer';
import { arrayOfProducts } from './modules/factory-function-products';
import Product from './components/product-components/Product';


const RouteSwitch = (props) => {
  // MY STATES
  const myProducts = [...arrayOfProducts[0], ...arrayOfProducts[1]];

  const [productObjects, setProductObjects] = useState(myProducts);

  const [cartProducts, setCartProducts] = useState([]);

  // Function used to create components with the appropriate properties

  const createMyProducts = (supplyArr) => {
    const arrToPushInto = [];

    supplyArr.forEach((prod) => {
      arrToPushInto.push(<Product productObject={prod} num={myProducts.indexOf(prod)} onChange={quantityInputHandler} onClickHandler={productButtonHandler} />);
    });
    return arrToPushInto;
  };

  const allProducts = createMyProducts(myProducts);

  // Filter men's and women's products as to create two separate pages via productPageChildren

  const mensProducts = allProducts.filter(m => m.props.productObject.productCategory === "Men's");
  const womensProducts = allProducts.filter(w => w.props.productObject.productCategory === "Women's");
  const allProductComponents = [...mensProducts, ...womensProducts];

  const productPageChildren =
    [<ProductContainer products={mensProducts} />, <ProductContainer products={womensProducts} />,];

  // Function which handles putting "isInCart = true" products into Cart page

  function toShoppingCartHandler() {
    const filteredCartProducts = allProductComponents.filter(product => product.props.productObject.isInCart === true);

    setCartProducts(filteredCartProducts);
  }
  // Each button associated w/ a product has a data-attr "num" which is used for a productObject's index.
  // First the productObject's .isInCartFunction() method is invoked, this switches between true and false
  // Every single time a product's button is clicked their quantity is set to 1, this is to make sure the item's total
  // Is always equal to its initial price when it is first added to the cart.
  function productButtonHandler(e) {
    const buttonNumber = e.target.dataset.num;

    productObjects[buttonNumber].isInCartFunction();
    productObjects[buttonNumber].setQuantity(1);

    // Every single time a product object's property is modified, productObjects state is set to a "new" copy of productObjects
    setProductObjects([...productObjects]);
    toShoppingCartHandler();
  };

  // eventHandler used for each product's input.
  function quantityInputHandler(e) {
    const quant = parseInt(e.target.value);
    const inputNum = e.target.dataset.numId;

    productObjects[inputNum].setQuantity(quant);

    setProductObjects([...productObjects]);
  }

  return (
    <BrowserRouter basename={props.basename}>
      <Routes>
        <Route
          element=
          {<App
            title='Meemo Boutique'
            cartEventHandler={toShoppingCartHandler}
            cartLength={cartProducts.length}
          />}>
          <Route path='/' element={<Homepage />} />
          <Route path='mens' element=
            {<ProductPage
              productHeading="Men's"
              children={productPageChildren[0]}
              productButtonHandler={productButtonHandler}
            />}
          />
          <Route path='womens' element=
            {<ProductPage
              productHeading="Women's"
              children={productPageChildren[1]}
              productButtonHandler={productButtonHandler}
            />}
          />

          <Route path='shopping-cart'
            element={<ShoppingCart
              myProductsArray={cartProducts}
              quantHandler={quantityInputHandler}
              items={cartProducts.length} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>);
};

export default React.memo(RouteSwitch);

