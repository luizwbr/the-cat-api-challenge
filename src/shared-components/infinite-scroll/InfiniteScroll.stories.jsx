/* eslint-disable import/exports-last */
import React from 'react';
import ImagesResource from '../../cat-module/resources/ImagesResource.js';
import InfiniteScroll from './InfiniteScroll.jsx';

// eslint-disable-next-line import/no-unused-modules
export default {
    title: 'TheCatAPI/InfiniteScroll',
    component: InfiniteScroll,
};

// eslint-disable-next-line import/no-unused-modules, func-style
export const Primary = () => {
    // eslint-disable-next-line func-style
    const renderElement = item => <img src={item.url} />;

    return <InfiniteScroll 
                resourceInstance={ImagesResource} 
                renderElement={renderElement} />;
};
