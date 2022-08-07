import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
    display: flex;
    padding: 5px;
`;
const FirstColumn = styled.div`
    flex-grow: 1;
`;
const SecondColumn = styled.div`
    grow: 0;
`;
const StyledH1 = styled.h1`
    font-size: 1em;
    margin: 0px;
`;
const StyledH2 = styled.h2`
    font-size: 0.6em;
    margin-top: 2px;
    margin-bottom: 2px;
`;
const Title = styled.span`
    color: #6e6e6e;
`;
const Information = styled.span`
    padding-left: 5px;
    color: #4a4a4a;
`;
const StyledLikeButton = styled(FontAwesomeIcon)`
    :hover {
        color: #f04f4f;
    }
`;

/**
 * CatInformation Component
 * - Renders the information about a cat
 *
 * @param {*} props
 * @param {string} props.item - the item to render
 *
 * @returns string
 */
function CatInformation(props) {
    const { item } = props;

    return (
        <Container>
            <FirstColumn>
                <StyledH1>
                    <Title>
                        ID:
                    </Title>
                    <Information>
                        #
                        {item?.id}
                    </Information>
                </StyledH1>
                <StyledH2>
                    <Title>
                        Width:
                    </Title>
                    <Information>
                        {item?.width}
                        px
                    </Information>
                </StyledH2>
                <StyledH2>
                    <Title>
                        Height:
                    </Title>
                    <Information>
                        {item?.height}
                        px
                    </Information>
                </StyledH2>
            </FirstColumn>
            <SecondColumn>
                <StyledLikeButton icon={faHeart} color="gray" />
            </SecondColumn>
        </Container>
    );
}

CatInformation.propTypes = {

    /**
     * item - the item to render
     */
    item: PropTypes.shape({

        /**
         * id - unique id for the image
         */
        id: PropTypes.string.isRequired,

        /**
         * width - width of the image
         */
        width: PropTypes.number,

        /**
         * height - height of the image
         */
        height: PropTypes.number,
    }),
};

// eslint-disable-next-line import/no-unused-modules
export default CatInformation;
