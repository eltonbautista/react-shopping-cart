import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './components/homepage/Homepage';
import ProductPage from './components/product-components/ProductPage';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductContainer from './components/product-components/ProductContainer';
import { arrayOfProducts } from './modules/factory-function-products';



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
  const mensProductsArray = [...arrayOfProducts[0]];
  const womensProductsArray = [...arrayOfProducts[1]];
  const productPageChildren = 
  [<ProductContainer products={mensProductsArray} />, <ProductContainer products={womensProductsArray} />, ];

  // const [mensProducts, womensProducts] = productPageChildren;

  const [mensProducts, setMensProducts] = useState(productPageChildren[0]);
  const [womensProducts, setWomensProducts] = useState(productPageChildren[1]);

  return (    
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<App title='Meemo Boutique' />}>
          <Route path='homepage' element={<Homepage />} />
          <Route path='mens' element={<ProductPage productHeading= "Men's" children={mensProducts} />} />
          <Route path='womens' element={<ProductPage productHeading= "Women's" children={womensProducts} />} />
          <Route path='shopping-cart' element={<ShoppingCart />} />
        </Route>
      </Routes>
   </BrowserRouter>);
  }

  export default RouteSwitch;

