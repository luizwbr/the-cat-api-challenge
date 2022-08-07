import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CatImage from './CatImage.jsx';
import CatInformation from './CatInformation.jsx';

const PolaroidDiv = styled.div`
    background: #ffffff;
    display: inline-block;
    margin: 55px 75px 30px;
    padding: 15px 15px 30px;
    text-decoration: none;
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, .3);
    -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
    -webkit-transition: all .20s linear;
    -moz-transition: all .20s linear;
    transition: all .20s linear;
    z-index: 0;
    position: relative;

    :hover {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        transform: scale(1.1);
        z-index: 10;
        -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .7);
        -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, .7);
        box-shadow: 0 5px 10px rgba(0, 0, 0, .7);
    }
`;

function CatContainer(props) {
    const { item } = props;

    return (
        <PolaroidDiv>
            <CatImage id={item?.id} url={item?.url} />
            <CatInformation item={item} />
        </PolaroidDiv>
    );
}

CatContainer.propTypes = {

    /**
     * item - the item to render
     */
    item: PropTypes.object.isRequired,
};

// eslint-disable-next-line import/no-unused-modules
export default CatContainer;
