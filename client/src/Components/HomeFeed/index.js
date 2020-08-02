import React from 'react';
import styled from 'styled-components';

import TweetInput from "./TweetInput";

const HomeFeed = () => {
    return(
        <>
            <Header>
                <Home>Home</Home>
            </Header>
            <TweetInput />
        </>
    );
};

const Header = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
`;

const Home = styled.span`
    position: relative;
    font-size: 1.3em;
    margin-left: 20px;
    font-weight: bold;
`;

export default HomeFeed;