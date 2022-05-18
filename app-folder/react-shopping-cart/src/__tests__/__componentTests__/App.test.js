import React from "react";
import ReactDOM from 'react-dom';
import { getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import RouteSwitch from "../../RouteSwitch";


describe('Testing App component through my RouteSwitch component', () => {
  //I have to use my RouteSwitch component because <App /> is using Router. 

  it('Initial test to make sure App is rendering correctly', async () => {
    act(() => {
      render(<RouteSwitch />);
    })

    expect(screen.getByText('Murim Shopping Cart')).toBeInTheDocument();
  })

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