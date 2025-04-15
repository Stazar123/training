import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds numbers correctly', () => {
  render(<App />);
  
  fireEvent.change(screen.getAllByRole('textbox')[0], {
    target: { value: '7' }
  });
  
  fireEvent.change(screen.getAllByRole('textbox')[1], {
    target: { value: '5' }
  });

  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('Calculate'));

  expect(screen.getByText(/Result:/i).textContent).toMatch(/12/);
});
