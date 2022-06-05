import React, { ReactDOM } from "react";
import { getByTestId, render, screen, } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import { act, createRenderer } from "react-dom/test-utils";
import Homepage from "../../components/homepage/Homepage";
import renderer from 'react-test-renderer';
import ImgInDiv from "../../components/homepage/ImgInDiv";

describe('Tests for Homepage', () => {
  // Initial test to make sure component is properly rendering onto page
  it('Should render onto the page', () => {
    const { getByRole } = render(<Homepage />);
    const tree = renderer.create(<Homepage />).toJSON();
    
    expect(screen.getAllByRole('heading')[0].textContent).toMatch(/our vision/i);
    expect(screen.getAllByRole('heading')[1].textContent).toMatch(/come as you are/i);
    
  });

  // Checks if ImgInDiv component is using proper src and alt attributes
  it('Image should have proper source and alt', () => {
    const { getByRole } = render(<ImgInDiv src='url' alt='randomAlt' />);

    expect(screen.getByRole('img').src).toMatch('url');
    expect(screen.getByRole('img').alt).toMatch('randomAlt');

  });

  
});