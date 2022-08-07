import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Main from '../Main.jsx';

test('renders Main module', () => {
    render(<Main />);

    const loadingText = screen.getByText(/Loading/i);
    expect(loadingText).toBeInTheDocument();
});
