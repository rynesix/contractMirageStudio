// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contractMirage title', () => {
    render(<App />);
    const titleElement = screen.getByText(/contractMirage/i);
    expect(titleElement).toBeInTheDocument();
});
