import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './components/homepage/Homepage';
import ProductPage from './components/product-components/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductContainer from './components/product-components/ProductContainer';


const productChildren = [<ProductContainer products={['Category 1']}  />,
<ProductContainer products={['Category 2']}  />,
<ProductContainer products={['Category 3']} />]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App title='Murim Shopping Cart' />}>
          <Route path='homepage' element={<Homepage />} />
          <Route path='product-category-zero' element={<ProductPage productHeading='Damage' children={productChildren[0]} />} />
          <Route path='product-category-one' element={<ProductPage productHeading='Cultivation' children={productChildren[1]} />} />
          <Route path='product-category-two' element={<ProductPage productHeading='Movement' children={productChildren[2]} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);