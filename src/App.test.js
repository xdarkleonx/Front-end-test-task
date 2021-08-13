import { render, screen } from '@testing-library/react';
import App from './App';

test('render App with title Signup', () => {
  render(<App />);
  const title = screen.getByText(/Signup/i);
  expect(title).toBeInTheDocument();
});
