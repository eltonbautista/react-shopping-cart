import React, { ReactDOM } from "react";
import { getByTestId, render, screen, } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import { act, createRenderer } from "react-dom/test-utils";
import Homepage from "../../components/homepage/Homepage";
import renderer from 'react-test-renderer';

describe('Tests for Homepage', () => {
  // Initial test to make sure component is properly rendering onto page
  it('Should render onto the page', () => {
    const { getByRole } = render(<Homepage />);
    const tree = renderer.create(<Homepage />).toJSON();
    
    expect(screen.getByRole('heading').textContent).toMatch(/webpage description/i);
    // expect(tree).toMatchSnapshot();

  });
});