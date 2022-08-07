import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch.js';
import SearchBar from '../search-bar/SearchBar.jsx';

/**
 * Infinite Scroll component
 * @param {Object} props - Component props
 * @param {Function} props.renderElement - Function that renders each item
 * - based on https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a
 *
 * @returns string
 */
function InfiniteScroll(props) {
    const { renderElement, resourceInstance } = props;

    const [query, setQuery] = useState('');
    const [pageNum, setPageNum] = useState(1);
    // eslint-disable-next-line max-len
    const { isLoading, error, items, hasMore } = useFetch(resourceInstance.fetchBySearchQuery, query, pageNum);

    const componentRef = useRef();
    const lastElementRef = useCallback((node) => {
        if (isLoading) {
            return;
        }

        if (componentRef?.current) {
            componentRef.current?.disconnect();
        }
        componentRef.current = new IntersectionObserver((entries) => {
            if (entries?.[0]?.isIntersecting && hasMore) {
                setPageNum(prev => prev + 1);
            }
        });

        if (node) {
            componentRef?.current?.observe(node);
        }
    }, [isLoading, hasMore]);

    // eslint-disable-next-line func-style
    const onSearch = (search) => {
        setQuery(search);
        setPageNum(1);
    };

    function renderLoading() {
        if (isLoading) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        return null;
    }

    function renderError() {
        if (error) {
            return (
                <div>
                    Error:
                    {error}
                </div>
            );
        }

        return null;
    }

    function renderSearchBar() {
        return (
            <SearchBar onSearch={onSearch} value={query} />
        );
    }

    function renderItems() {
        return items?.map((item, index) => {
            const key = `${item?.id}-${index}`;

            if (items?.length === index + 1) {
                return (
                    <div key={key} ref={lastElementRef}>
                        {renderElement(item, key)}
                    </div>
                );
            }

            return (
                <div key={key}>
                    {renderElement(item, key)}
                </div>
            );
        });
    }

    return (
        <div>
            {renderSearchBar()}
            {renderItems()}
            {renderLoading()}
            {renderError()}
        </div>
    );
}

InfiniteScroll.propTypes = {

    /**
     * Function that renders an element.
     */
    renderElement: PropTypes.func,

    /**
     * Resource instance.
     */
    resourceInstance: PropTypes.func,
};

export default InfiniteScroll;
