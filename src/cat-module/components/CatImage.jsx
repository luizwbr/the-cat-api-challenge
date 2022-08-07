import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_WIDTH = 400;
const StyledDiv = styled.div`
    padding: 5px;
`;
const StyledImg = styled.img`
    width: ${DEFAULT_WIDTH}px;
    height: auto;
    background: #efefef;
`;

/**
 * CatImage Component
 *  - Renders an image of a cat
 *
 * @param {*} props
 * @param {string} props.url - Image url
 * @param {number} props.width - Image width

 * @returns string
 */
function CatImage(props) {
    const { id, url, width = DEFAULT_WIDTH } = props;

    return (
        <StyledDiv>
            <StyledImg id={`image-${id}`} src={url} width={width} loading="lazy" alt={`cat-image-${id}`} />
        </StyledDiv>
    );
}

CatImage.propTypes = {

    /**
     * id - unique id for the image
     */
    id: PropTypes.string.isRequired,

    /**
     * The url of the image
     */
    url: PropTypes.string.isRequired,

    /**
     * The width of the image
     */
    width: PropTypes.number,
};

export default CatImage;
