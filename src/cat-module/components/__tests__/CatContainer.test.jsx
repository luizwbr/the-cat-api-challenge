import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CatContainer from '../CatContainer.jsx';

const mockProps = {
    item: {
        breeds: [],
        id: '6rb',
        url: 'https://cdn2.thecatapi.com/images/6rb.gif',
        width: 450,
        height: 252,
    }
};

test('renders', () => {
    // eslint-disable-next-line max-len
    const { asFragment } = render(<CatContainer item={mockProps.item} />);

    expect(asFragment()).toMatchSnapshot();
});

