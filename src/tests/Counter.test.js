import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event'


beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent('0');   
});

test('clicking + increments the count', async  () => {
    const plusButton = screen.getByRole('button', { name: /\+/i });
    await userEvent.click(plusButton);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent('1');

});

test('clicking - decrements the count', async  () => {
    const minusButton = screen.getByRole('button', { name: /\-/i });
    await userEvent.click(minusButton);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent('-1');

});

