import React, { ReactDOM } from "react";
import { getByTestId, render, screen, } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import { act, createRenderer } from "react-dom/test-utils";
import Homepage from "../../components/homepage/Homepage";
import renderer from 'react-test-renderer';

describe('Tests for Homepage', () => {
  it('Should render onto the page', () => {
    const { myHomePage } = render(<Homepage title='Legendary Murim Shop'/>);
    const tree = renderer.create(<Homepage title='Legendary Murim Shop' />).toJSON();
    
    expect(screen.getByRole('heading').textContent).toMatch(/legendary murim shop/i);
    expect(tree).toMatchSnapshot();

  });
});