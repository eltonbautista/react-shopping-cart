import React, { ReactDOM } from "react";
import { getByTestId, render, screen, } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";

import ProductPage from "../../components/product-components/ProductPage";
import ProductContainer from "../../components/product-components/ProductContainer";
import Product from "../../components/product-components/Product";
import factoryFunctionProducts from "../../modules/factory-function-products";
import { arrayOfProducts } from "../../modules/factory-function-products";
import RouteSwitch from "../../RouteSwitch";

describe('Tests for Product Components', () => {
  const firstProduct = arrayOfProducts[0][0];

  it('Making sure ProductContainer renders properly', () => {
    render(<ProductContainer products={arrayOfProducts[0]}/>);

    expect(screen.getByTestId('product-container').textContent).toMatch(/men's/i);
  })

  it('Making sure Product renders properly', () => {
    render(firstProduct);

    expect(screen.getByTestId('product').textContent).toMatch(/men's/i);
    expect(screen.getByRole('img').src).toMatch(/men-blue-jacket.jpg/i);
  })
});