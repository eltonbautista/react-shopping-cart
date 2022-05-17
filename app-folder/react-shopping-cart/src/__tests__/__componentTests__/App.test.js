import React, { ReactDOM } from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import App from "../../App";
import { act } from "react-dom/test-utils";

describe('Testing App component', () => {
  it('Initial test to make sure App is rendering correctly', () => {
    const { getByTestId } = render(<App />);

    expect(screen.getByTestId('App').textContent).toMatch(/legendary murim shop/i);
  })
})