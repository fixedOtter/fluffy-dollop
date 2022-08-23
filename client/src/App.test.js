import { render, screen } from '@testing-library/react'
import App from './App';

test('this is my button button is on the screen', async() => {
  render(<App />)

  expect(screen.getByRole('button', {name:'this is my button'})).toBeInTheDocument();
});