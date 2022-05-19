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
  const myNewProducts = arrayOfProducts;

  const [mensProducts, setMensProducts] = useState(myNewProducts[0]);
  const [womensProducts, setWomensProducts] = useState(myNewProducts[1]);

  const createMyProducts = (supplyArr) => {
    const arrToPushInto = [];

    supplyArr.forEach((prod) => {
      arrToPushInto.push(<Product productObject={prod} onClickHandler={productButtonHandler} />);
    })
    return arrToPushInto;
  }
  
  const mensProductsArray = [];
  const womensProductsArray = [];

  const prodOne = createMyProducts(mensProducts);
  const prodTwo = createMyProducts(womensProducts);
  // console.log(prodOne);

  // myNewProducts[0].forEach((myProdObj) => {
  //   mensProductsArray.push(createMyProducts(myProdObj));
  // });
  // myNewProducts[1].forEach((myProdObj) => {
  //   womensProductsArray.push(createMyProducts(myProdObj));
  // });

  // mensProductsArray.forEach((product) => {
  //   product.props.productObject.productButtonHandler = productButtonHandler;
  // });



  const productPageChildren =
  [<ProductContainer products={prodOne} />, <ProductContainer products={prodTwo} />, ];


  function productButtonHandler(e) {
    const makeIterable = [...e.target.parentElement.parentElement.children];
    const myProductDiv = e.target.parentElement;
    const indexOfProduct = makeIterable.indexOf(myProductDiv);
    console.log(myProductDiv.attributes.category.value)

    if(myProductDiv.attributes.category.value === 'Men\'s') {
      mensProducts[indexOfProduct].isInCartFunction();
      setMensProducts([...mensProducts]);
    } else if (myProductDiv.attributes.category.value === 'Women\'s') {
      womensProducts[indexOfProduct].isInCartFunction();
      setWomensProducts([...womensProducts]);
    };

  };

  

  return (    
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<App title='Meemo Boutique' />}>
          <Route path='homepage' element={<Homepage />} />
          <Route path='mens' element={<ProductPage productHeading= "Men's" children={productPageChildren[0]} productButtonHandler={productButtonHandler} />} />
          <Route path='womens' element={<ProductPage productHeading= "Women's" children={productPageChildren[1]} productButtonHandler={productButtonHandler} />} />
          <Route path='shopping-cart' element={<ShoppingCart />} />
        </Route>
      </Routes>
   </BrowserRouter>);
  }

  export default RouteSwitch;

