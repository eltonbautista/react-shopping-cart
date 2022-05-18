import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './components/homepage/Homepage';
import ProductPage from './components/product-components/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductContainer from './components/product-components/ProductContainer';
import { arrayOfProducts } from './modules/factory-function-products';

const productChildren = 
[
  <ProductContainer products={arrayOfProducts[0]} />,
  <ProductContainer products={['Category 2']} />,
  <ProductContainer products={['Category 3']} />,
];

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

    return (    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App title='Murim Shopping Cart' />}>
            <Route path='homepage' element={<Homepage />} />
            <Route path='product-category-zero' element={<ProductPage productHeading='Damage' children={productChildren[0]} />} />
            <Route path='product-category-one' element={<ProductPage productHeading='Cultivation' children={productChildren[1]} />} />
            <Route path='product-category-two' element={<ProductPage productHeading='Movement' children={productChildren[2]} />} />
          </Route>
        </Routes>
      </BrowserRouter>);
  }

  export default RouteSwitch;

