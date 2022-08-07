import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SearchBar from '../SearchBar.jsx';

const mockProps = {
    onSearch: jest.fn(),
    value: '123',
};

test('renders', () => {
    // eslint-disable-next-line max-len
    const { asFragment } = render(<SearchBar onSearch={mockProps.onSearch} value={mockProps.value} />);

    expect(asFragment()).toMatchSnapshot();
});

