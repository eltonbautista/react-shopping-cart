import React, { ReactDOM } from "react";
import { getByTestId, render, screen, } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional


import ProductPage from "../../components/product-components/ProductPage";
import ProductContainer from "../../components/product-components/ProductContainer";
import Product from "../../components/product-components/Product";

describe('Tests for Product', () => {

  it('Making sure Product Page renders properly', () => {
    render(<ProductPage productHeading='Damaging Abilities' />)

    expect(screen.getByRole('heading').textContent).toMatch(/damaging abilities/i);
  })

  it('Making sure ProductContainer renders properly', () => {
    render(<ProductContainer products='Product Array Cards'/>);

    expect(screen.getByTestId('product-container').textContent).toMatch(/product array cards/i);
  })

  it('Making sure Product renders properly', () => {
    render(<Product imgSrc='url' imgAlt='randomAlt' productDescription = 'Random product description' />)

    expect(screen.getByTestId('product').textContent).toMatch(/random product description/i);
    expect(screen.getByRole('img').src).toMatch(/url/i);
  })
});