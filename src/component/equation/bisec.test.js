import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Bisection from './Bisection';
import '@testing-library/jest-dom';


describe('Bisection', () => {
 
  test('test screen', () => {
    render(<Bisection />);

     
    // Input XL
    const xlInput = screen.getByTestId("XL") ;
    fireEvent.change(xlInput, { target: { value: '0' } });
    
    // Input XR
    const xrInput = screen.getByTestId("XR");
    fireEvent.change(xrInput, { target: { value: '2' } });

    // Input equation
    const equationInput = screen.getByTestId("Eq");
    fireEvent.change(equationInput, { target: { value: 'x^2 - 4' } });

    // Click calculate button
    const calculateButton = screen.getByTestId("bottom")
    fireEvent.click(calculateButton);

    // Check answer
    const answer = screen.getByTestId("ans");
    console.log(answer.textContent)
    expect(answer.textContent).toBe("Answer = 1.000000");
  });

});
