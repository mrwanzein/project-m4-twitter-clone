import React from 'react';
import styled from 'styled-components';

import {CurrentUserContext} from "../CurrentUserContext";
import UnstyledBtn from "../UnstyledButton";
import {COLORS} from "../constants";

const TweetInput = () => {
    const {currentUser} = React.useContext(CurrentUserContext);
    const [textTracker, setTextTracker] = React.useState("");
    
    const handleCharCount = (e) => {
        setTextTracker(e.target.value);
    }

    let color;
    if(textTracker.length >= 225 && textTracker.length <= 280) {
        color = {color: "rgb(252, 245, 43)"};
    } else if(textTracker.length > 280) {
        color = {color: "red"};
    }

    return(
        <Wrapper>
            <ProfilePicAndInputContainer>
                <ProfilePic src={currentUser.avatarSrc} alt="Profile Cat"/>
                <TextInputArea 
                name="tweet" id="tweet" cols="30" rows="9" placeholder="What's happening?" 
                value={textTracker}
                onChange={handleCharCount}
                />
            </ProfilePicAndInputContainer>
            <CharDisplayAndMeow>
                <CharTracking style={color}>{280 - textTracker.length}</CharTracking>
                <MeowBtn disabled={textTracker.length > 280 || textTracker.length === 0 ? true : false}>Meow</MeowBtn>
            </CharDisplayAndMeow>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 15px;
    border-bottom: 10px solid rgb(235, 235, 235);
`;

const ProfilePicAndInputContainer = styled.div`
    display: flex;
`;

const ProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px;
`;

const TextInputArea = styled.textarea`
    flex: 1;
    border: none;
    resize: none;
    padding-top: 10px;

    &:focus {
        resize: none;
        outline: none;
        padding-top: 10px;
        line-height: 1.2;
    }
`;

const CharDisplayAndMeow = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
`;

const MeowBtn = styled(UnstyledBtn)`
    color: white;
    background-color: ${COLORS.primary};
    padding: 10px 15px;
    border-radius: 30px;
    margin: 0 10px;
    font-weight: bold;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;

const CharTracking = styled.span`
    color: lightgray;
`;

export default TweetInput;