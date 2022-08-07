import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from '../shared-components/infinite-scroll/InfiniteScroll.jsx';
import ImagesResource from '../cat-module/resources/ImagesResource.js';
import CatContainer from '../cat-module/components/CatContainer.jsx';

const StyledContainer = styled.div`
    padding-top: 10px;
`;

function Main() {
    // eslint-disable-next-line func-style
    const renderElement = item => (
        <CatContainer item={item} />
    );

    return (
        <StyledContainer>
            <InfiniteScroll
                renderElement={renderElement}
                resourceInstance={ImagesResource} />
        </StyledContainer>
    );
}

export default Main;
