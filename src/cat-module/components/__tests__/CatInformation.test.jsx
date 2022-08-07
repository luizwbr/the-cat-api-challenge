import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CatInformation from '../CatInformation.jsx';

const mockProps = {
    item: {
        breeds: [],
        id: '6rb',
        url: 'https://cdn2.thecatapi.com/images/6rb.gif',
        width: 450,
        height: 252,
    }
};

test('renders CatInformation component', () => {
    // eslint-disable-next-line max-len
    render(<CatInformation item={mockProps.item} />);

    const width = screen.getByText(/450/i);
    expect(width).toBeInTheDocument();

    const height = screen.getByText(/252/i);
    expect(height).toBeInTheDocument();

    const id = screen.getByText(/6rb/i);
    expect(id).toBeInTheDocument();
});


