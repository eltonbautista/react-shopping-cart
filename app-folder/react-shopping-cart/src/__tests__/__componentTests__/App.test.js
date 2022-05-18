import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import App from "../../App";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from "../../components/product-components/ProductPage";
import ProductContainer from "../../components/product-components/ProductContainer";
import Homepage from "../../components/homepage/Homepage";
import RouteSwitch from "../../RouteSwitch";
const productChildren = [<ProductContainer products={['Category 1']}  />,
<ProductContainer products={['Category 2']}  />,
<ProductContainer products={['Category 3']} />]

describe('Testing App component', () => {

  it('Initial test to make sure App is rendering correctly', async () => {
    act(() => {
      render(<RouteSwitch />);
    })

    expect(screen.getByText('Murim Shopping Cart')).toBeInTheDocument();
  })

  // Need to figure out a way to make this shorter
  it('Testing React Router and Links by simulating user button clicks', async () => {
    
   await act(() => {
    render(
      <RouteSwitch />
    )})

    userEvent.click(screen.getByRole('button', {name: /home/i}));
    expect(screen.getByText('Webpage Description')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', {name: /product page zero/i}));
    expect(screen.getByText('Damage')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', {name: /product page one/i}));
    expect(screen.getByText('Cultivation')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', {name: /product page two/i}));
    expect(screen.getByText('Movement')).toBeInTheDocument();
  })
})