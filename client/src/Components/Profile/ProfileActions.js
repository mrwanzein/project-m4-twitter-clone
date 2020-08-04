import React from 'react';
import styled from 'styled-components';

import UnstyledButton from "../UnstyledButton";
import {COLORS} from "../constants";

const ProfileActions = () => {
    return(
        <Wrapper>
            <Btn>Tweets</Btn>
            <Btn>Media</Btn>
            <Btn>Likes</Btn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;

const Btn = styled(UnstyledButton)`
    padding: 25px 50px;
    
    &:hover {
        color: ${COLORS.primary};
        border-bottom: 2px solid ${COLORS.primary};
    }
`;

export default ProfileActions;