import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DEFAULT_PLACEHOLDER = 'Search for a cat';
const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledLabel = styled.label`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    align-self: center;
    margin-bottom: 0;
`;
const StyledInputSearch = styled.input`
    -webkit-appearance: none !important;
    background-clip: padding-box;
    background-color: white;
    vertical-align: middle;
    border-radius: 2px;
    border: 1px solid #e0e0e5;
    font-size: 16px;
    width: 100%;
    line-height: 2;
    padding: 5px 10px;
    -webkit-transition: border-color 0.2s;
    -moz-transition: border-color 0.2s;
    transition: border-color 0.2s;
    :hover {
        transition: all 0.5s;
        box-shadow: 0 0 40px #f9d442b9;
        border-color: #f9d342;
        outline: none;
    }
`;
const StyledButton = styled.button`
    margin: 0;
    padding: 5px 15px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    font-family: "Font Awesome 5 Free";
    display: inline-block;
    font-weight: 600;
    font-size: 12px;
    background: #f9d342;
    color: #292826;
    border: 1px solid transparent;
    vertical-align: middle;
    text-shadow: none;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;

    :hover,:active,:focus {
        cursor: pointer;
        background: #d4b743;
        color: #292826;
        outline: 0;
    }   
`;
const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 10px;
`;

/**
 * SearchBar Component
 * - Renders a search bar
 * - Handles the search query
 * based on https://codepen.io/code-district/pen/YzyvKPg
 *
 * @param {*} props
 * @returns a search input
 */
function SearchBar(props) {
    const { onSearch, value } = props;
    const [search, setSearch] = useState(value);

    // eslint-disable-next-line func-style
    const onSubmit = (event) => {
        event.preventDefault();
        onSearch(search);
    };

    // eslint-disable-next-line func-style
    const onChange = (event) => {
        setSearch(event?.target?.value);
    };

    return (
        <StyledWrapper>
            <StyledForm role="search" onSubmit={onSubmit}>
                <StyledLabel>
                    <StyledInputSearch type="search" placeholder={DEFAULT_PLACEHOLDER} name='search-bar' value={search} onChange={onChange} />
                </StyledLabel>
                <StyledButton type="submit" id="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </StyledButton>
            </StyledForm>
        </StyledWrapper>
    );
}

SearchBar.propTypes = {

    /**
     * onSearch - callback function to be called when the search button is clicked
     */
    onSearch: PropTypes.func,

    /**
     * value - the value of the search bar
     */
    value: PropTypes.string,
};

export default SearchBar;
