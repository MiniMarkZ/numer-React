// import { render, screen, fireEvent } from '@testing-library/react';
// import FalsePosition from './FalsePosition';

// describe('FalsePosition', () => {
//   test('renders inputs and button', () => {
//     render(<FalsePosition />);

//     expect(screen.getByLabelText(/input f\(x\)/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/input xl/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/input xr/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /calculate/i })).toBeInTheDocument();
//   });

//   test('calculates root using False Position method', () => {
//     render(<FalsePosition />);

//     const equationInput = screen.getByLabelText(/input f\(x\)/i);
//     const xlInput = screen.getByLabelText(/input xl/i);
//     const xrInput = screen.getByLabelText(/input xr/i);
//     const calculateButton = screen.getByRole('button', { name: /calculate/i });

//     fireEvent.change(equationInput, { target: { value: 'x^2 - 4' } });
//     fireEvent.change(xlInput, { target: { value: '1' } });
//     fireEvent.change(xrInput, { target: { value: '3' } });

//     fireEvent.click(calculateButton);

//     expect(screen.getByText(/root/i)).toHaveTextContent('2');
//   });
// });
