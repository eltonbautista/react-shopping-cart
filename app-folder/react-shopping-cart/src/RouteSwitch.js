import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './components/homepage/Homepage';
import ProductPage from './components/product-components/ProductPage';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductContainer from './components/product-components/ProductContainer';
import { arrayOfProducts } from './modules/factory-function-products';
import Product from './components/product-components/Product';


// PROOF TO SHOW THAT INCREMENT AND DECREMENT INCREASE PRICE. SO WHEN THE BUTTONS ARE CLICKED IN SHOPPING CART
// ONLY THE PRICE INFO NEEDS TO BE GRABBED BY THE SHOPPING CART TOTAL.
// BECAUSE HITTING THE BUTTONS WILL AFFECT THE PRODUCT'S PRICE THUS AFFECTING SHOPPING CART TOTAL PRICE

// arrayOfProducts[0][0].props.productObject.incrementQuantity();
// arrayOfProducts[0][0].props.productObject.incrementQuantity();
// arrayOfProducts[0][0].props.productObject.incrementQuantity();
// arrayOfProducts[0][0].props.productObject.decrementQuantity();
// arrayOfProducts[0][0].props.productObject.decrementQuantity();
// arrayOfProducts[0][0].props.productObject.decrementQuantity();


const RouteSwitch = () => {
  // MY STATES
  const myProducts = [...arrayOfProducts[0], ...arrayOfProducts[1]];
  
  const [productObjects, setProductObjects] = useState(myProducts);

  const [cartProducts, setCartProducts] = useState([]);

  const createMyProducts = (supplyArr) => {
    const arrToPushInto = [];

    supplyArr.forEach((prod) => {
      arrToPushInto.push(<Product productObject={prod} num={myProducts.indexOf(prod)} onChange={quantityInputHandler} onClickHandler={productButtonHandler} />);
    })
    return arrToPushInto;
  }

  const allProducts = createMyProducts(myProducts);

  const mensProducts = allProducts.filter(m => m.props.productObject.productCategory === "Men's");
  const womensProducts = allProducts.filter(w => w.props.productObject.productCategory === "Women's");
  const allProductComponents = [...mensProducts, ...womensProducts];

  const productPageChildren =
  [<ProductContainer products={mensProducts} />, <ProductContainer products={womensProducts} />, ];


  function toShoppingCartHandler() {
    const filteredCartProducts = allProductComponents.filter(product => product.props.productObject.isInCart === true);

    setCartProducts(filteredCartProducts);
  }

  function removeInputs() {
    productObjects.forEach((product) => {
      delete product.children;
    });
    setProductObjects([...productObjects]);
  }

  function productButtonHandler(e) {
    const buttonNumber = e.target.dataset.num;

    const inCartBool = productObjects[buttonNumber].isInCartFunction();
      if (!inCartBool) {
        productObjects[buttonNumber].setQuantity(1);
        delete productObjects[buttonNumber].children;
      }
      // productObjects[indexOfProduct].incrementQuantity();
      // THIS IS WHAT WILL BE IN A SEPARATE EVENTHANDLER AND PASSED DOWN TO QUANTITY FACTOR IN SHOPPINGCART COMPONENT + - BUTTONS
      setProductObjects([...productObjects]);
      toShoppingCartHandler();
  };

  function quantityInputHandler(e) {
    const quant = parseInt(e.target.value);
    const inputNum = e.target.dataset.numId;

    productObjects[inputNum].setQuantity(quant);

    setProductObjects([...productObjects]);
  }

  
  return (    
   <BrowserRouter>
      <Routes>
        <Route 
        path='/' element=
        {<App 
          title='Meemo Boutique' 
          sexButtonHandler={removeInputs} 
          cartEventHandler={toShoppingCartHandler} 
        />}>
          <Route path='homepage' element={<Homepage />} />
          <Route path='mens' element=
          {<ProductPage 
            productHeading= "Men's" 
            children={productPageChildren[0]} 
            productButtonHandler={productButtonHandler} 
            />}
          />
          <Route path='womens' element=
          {<ProductPage 
            productHeading= "Women's" 
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
  }

  export default RouteSwitch;

