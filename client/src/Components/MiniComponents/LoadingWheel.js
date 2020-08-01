import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiLoader } from "react-icons/fi";

const LoadingWheel = () => {
    return(
        <Wrapper>
            <Animate>
                <FiLoader />
            </Animate>
        </Wrapper>
    )
}

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

const Animate = styled.span`
    font-size: 1.5em;
    animation: ${rotate} 1s linear infinite;
`;

export default LoadingWheel;