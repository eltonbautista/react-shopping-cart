import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import App from "../../App";
import { act } from "react-dom/test-utils";

describe('Testing App component', () => {
  it('Initial test to make sure App is rendering correctly', () => {
    render(<App title='My Shopping Cart' />);
    expect(screen.getByText('My Shopping Cart')).toBeInTheDocument();
  })
})