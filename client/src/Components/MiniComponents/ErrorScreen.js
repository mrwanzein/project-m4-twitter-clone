import React from 'react';
import styled from "styled-components";
import { FaBomb } from "react-icons/fa";

import UnstyledBtn from "../UnstyledButton";

const ErrorScreen = () => {
    return(
        <Wrapper>
            <FaBomb style={{fontSize: "3em"}}/>
            <h1 style={{fontWeight: "bold", fontSize: "1.1em"}}>An unknown error has occured.</h1>
            <p style={{fontSize: "15px", width: "70%"}}>Please try refreshing the page, or <FakeLink>contact support</FakeLink> if the problem persists</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    margin-top: 50px;
`;

const FakeLink = styled(UnstyledBtn)`
    display: inline-block;
    color: blue;
    border-bottom: 1px solid blue;
    font-size: 1em;
`;

export default ErrorScreen;