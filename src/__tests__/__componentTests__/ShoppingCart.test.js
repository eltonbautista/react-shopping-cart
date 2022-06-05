import ShoppingCart from "../../components/shopping-cart/ShoppingCart";
import React from "react";
import ReactDOM from 'react-dom';
import { cleanup, getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import RouteSwitch from "../../RouteSwitch";
import { arrayOfProducts } from "../../modules/factory-function-products";
import Product from "../../components/product-components/Product";
import { Routes } from "react-router-dom";



describe('Tests for my ShoppingCart', () => {
  afterEach(() => {
    cleanup();
  });

  it('Checking if ShoppingCart h3 is properly rendering empty cart', () => {
    const myMockState = jest.fn();
    myMockState.mockReturnValue(['']);

    render(<RouteSwitch />);

    act(() => {
      userEvent.click(screen.getAllByRole('img', {alt: 'cart'})[0]);
    })

    expect(screen.getByText('There are no items in your cart...')).toBeInTheDocument();
  });

  
  it('Checking if ShoppingCart h3 is properly rendering cart with items', () => {

    render(<RouteSwitch />);
    
    userEvent.click(screen.getByRole('button', {name: 'Women\'s'}));
    userEvent.click(screen.getAllByRole('button', {name: 'Add to bag'})[0]);
    
    expect(screen.getByText(/remove from bag/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('img', {name: 'cart'}));
    expect(screen.getByText(/your items/i)).toBeInTheDocument();
    expect(screen.getByText(/cart total: 19.99/i)).toBeInTheDocument();
  });

});