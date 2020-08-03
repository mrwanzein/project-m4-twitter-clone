import React from 'react';
import styled from 'styled-components';

import TweetInput from "./TweetInput";
import Feed from "./Feed";

const HomeFeed = () => {
    return(
        <>
            <Header>
                <Home>Home</Home>
            </Header>
            <TweetInput />
            <Feed />
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
    font-size: 1.3em;
    margin-left: 20px;
    font-weight: bold;
`;

export default HomeFeed;