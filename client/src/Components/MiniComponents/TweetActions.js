import React from 'react';
import styled from 'styled-components';

import UnstyledButton from "../UnstyledButton";

import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";
import { FcLike } from "react-icons/fc";

const handleToggleLike = (liked, setLiked, numLikes, setNumlikes) => {
    if(liked) {
        setLiked(!liked);
        setNumlikes(numLikes - 1);
    } else {
        setLiked(!liked);
        setNumlikes(numLikes + 1);
    }
}

const TweetActions = ({retweeted}) => {
    const [isLiked, setLiked] = React.useState(false);
    const [numLikes, setNumlikes] = React.useState("");

    return(
        <Wrapper>
            <MessageCirlceBtn onClick={(e) => e.stopPropagation()} onKeyPress={(e) => {e.stopPropagation(); e.preventDefault()}}>
                <FiMessageCircle />
            </MessageCirlceBtn>
            
            <div style={{display: "flex", alignItems: "center"}} onClick={(e) => e.stopPropagation()} onKeyPress={(e) => {e.stopPropagation(); e.preventDefault()}}>
                <RetweetNumBtn>
                    <FiRepeat />
                </RetweetNumBtn>
                <NumberIndicator>{retweeted ? 1 : null}</NumberIndicator>
            </div>
            
            <div style={{display: "flex", alignItems: "center"}}>
                <LikeBtn onClick={(e) => {
                    e.stopPropagation();
                    handleToggleLike(isLiked, setLiked, numLikes, setNumlikes);
                }}
                
                onKeyPress={(e) => {
                    if(e.key === "Enter"){
                        e.preventDefault();
                        e.stopPropagation();
                        handleToggleLike(isLiked, setLiked, numLikes, setNumlikes);
                    }
                }}
                >
                    {Number(numLikes) > 0 ? <FcLike style={{fontSize: "1.1em"}}/> : <FiHeart />}
                </LikeBtn>
                <NumberIndicator>{numLikes === 0 ? "" : numLikes}</NumberIndicator>
            </div>
            
            <ShareBtn onClick={(e) => e.stopPropagation()} onKeyPress={(e) => {e.stopPropagation(); e.preventDefault()}}>
                <FiShare />
            </ShareBtn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const MessageCirlceBtn = styled(UnstyledButton)`
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgb(201, 137, 250);
        border-radius: 50%;
    }
`;

const RetweetNumBtn = styled(UnstyledButton)`
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgb(92, 211, 247);
        border-radius: 50%;
    }
`;

const LikeBtn = styled(UnstyledButton)`
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgb(247, 87, 87);
        border-radius: 50%;
    }
`;

const ShareBtn = styled(UnstyledButton)`
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgb(201, 137, 250);
        border-radius: 50%;
    }
`;

const NumberIndicator = styled.span`
    margin-left: 5px;
`;

export default TweetActions;