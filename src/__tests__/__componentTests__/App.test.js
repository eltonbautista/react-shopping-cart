import React from "react";
import ReactDOM from 'react-dom';
import { getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import RouteSwitch from "../../RouteSwitch";


describe('Testing App component through my RouteSwitch component', () => {
  // I have to use my RouteSwitch component because <App /> is using Router. 

  it('Initial test to make sure App is rendering correctly', async () => {
    act(() => {
      render(<RouteSwitch />);
    })

    expect(screen.getByText('Meemo Boutique')).toBeInTheDocument();
  })

  it('Testing React Router and Links by simulating user button clicks', async () => {
    
   await act(() => {
    render(
      <RouteSwitch />
    )})

    userEvent.click(screen.getByRole('button', {name: /home/i}));
    expect(screen.getByText('Our Vision...')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('mens'));
    expect(screen.getAllByText("Men's")[0]).toBeInTheDocument();

    userEvent.click(screen.getByTestId('womens'));
    expect(screen.getAllByText("Women's")[1]).toBeInTheDocument();
    
    userEvent.click(screen.getByTestId('shopping-cart-page'));
    expect(screen.getByText('My Shopping Cart')).toBeInTheDocument();
  })
})