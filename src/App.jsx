
// eslint-disable import/no-unused-modules
import React from 'react';
import styled from 'styled-components';
import Main from './main-module/Main.jsx';

function App() {
    const StyledApp = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    return (
        <StyledApp className="App">
            <Main />
        </StyledApp>
    );
}

export default App;
