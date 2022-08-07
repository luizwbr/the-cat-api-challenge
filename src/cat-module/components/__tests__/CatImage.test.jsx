import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CatImage from '../CatImage.jsx';

const mockProps = {
    id: '6rb',
    url: 'https://cdn2.thecatapi.com/images/6rb.gif',
    width: 450,
};

test('render imagem correctly', async () => {    
    // eslint-disable-next-line max-len
    const { getByAltText } = await render(<CatImage id={mockProps.id} url={mockProps.url} width={mockProps.width} />);
    
    const image = getByAltText('cat-image-6rb');
    expect(image.src).toContain('https://cdn2.thecatapi.com/images/6rb.gif');
});

test('renders', () => {
    // eslint-disable-next-line max-len
    const { asFragment } = render(<CatImage id={mockProps.id} url={mockProps.url} width={mockProps.width} />);

    expect(asFragment()).toMatchSnapshot();
});

