import React from 'react';
import SearchBar from './SearchBar.jsx';

export default {
    title: 'TheCatAPI/SearchBar',
    component: SearchBar,
};

export const Primary = () => {
    const onSearch = search => { console.log(search); };
    const value = 'cat';

    return <SearchBar onSearch={onSearch} value={value} />
};
