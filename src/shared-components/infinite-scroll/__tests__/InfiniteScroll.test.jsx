import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import InfiniteScroll from '../InfiniteScroll.jsx';

const mockfetchBySearchQuery = jest.fn();
const mockProps = {
    renderElement: jest.fn().mockReturnValueOnce(item => (
        <div data-id={item.id} />
    )),
    resourceInstance: {
        fetchBySearchQuery: mockfetchBySearchQuery
    },
};

test('renders', () => {
    // eslint-disable-next-line max-len
    const { asFragment } = render(<InfiniteScroll renderElement={mockProps.renderElement} resourceInstance={mockProps.resourceInstance} />);

    expect(asFragment()).toMatchSnapshot();
});

