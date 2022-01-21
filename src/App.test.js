import { render, screen } from '@testing-library/react';
import App from './App';

test('renders renders without crashing', () => {
  render(<App />);
});
