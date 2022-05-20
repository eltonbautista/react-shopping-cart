import ShoppingCart from "../../components/shopping-cart/ShoppingCart";
import React from "react";
import ReactDOM from 'react-dom';
import { getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import RouteSwitch from "../../RouteSwitch";


describe('Tests for my ShoppingCart', () => {
  it('Checking if ShoppingCart h3 is properly rendering empty cart', () => {
    const myMockState = jest.fn();
    myMockState.mockReturnValue([]);

    render(<ShoppingCart title={myMockState().length} arrayState={myMockState()} />);

    expect(screen.getByText('There are no items in your cart...')).toBeInTheDocument();
  });

  
  it('Checking if ShoppingCart h3 is properly rendering cart with items', () => {
    const myMockState = jest.fn();
    myMockState.mockReturnValue(['first product']);

    render(<ShoppingCart title={myMockState().length} arrayState={myMockState()} />);

    expect(screen.getByText('Your items:')).toBeInTheDocument();
  });

});