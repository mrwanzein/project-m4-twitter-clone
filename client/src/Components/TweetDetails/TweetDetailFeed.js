import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import moment from 'moment';
import { FiRepeat } from "react-icons/fi";

import TweetActions from "../MiniComponents/TweetActions";


const TweetDetailFeed = ({tweet, id}) => {
    let history = useHistory();
    
    const handleViewTweet = (id) => {
        history.push(`/tweet/${id}`)
    }

    const handleViewProfile = (profileName) => {
        history.push(`/profile/${profileName}`)
    }

    return(
        <>
            {tweet.retweetFrom ? <RetweetHeader><FiRepeat /> {tweet.retweetFrom.displayName} Remeowed</RetweetHeader> : null}
            <Wrapper tabIndex="0" aria-label="View tweet" onClick={() => {handleViewTweet(id)}}  onKeyPress={(e) => {
                if(e.key === "Enter") {
                    handleViewTweet(id)
                }  
            }}>
                <span style={{display: "flex", margin: "10px"}}>
                    <ProfilePic src={tweet.author.avatarSrc} alt="Profile avatar"/>
                    <TweetWrapper>
                        <span style={{display: "flex", alignItems: "center"}}>
                            <ProfileEvent tabIndex="0" aria-label="View profile" onClick={(e) => {e.stopPropagation(); handleViewProfile(tweet.author.handle)}}
                            onKeyPress={(e) => {
                                e.stopPropagation();
                                handleViewProfile(tweet.author.handle);
                            }}
                            >{tweet.author.displayName}&nbsp;
                            </ProfileEvent>
                            <span style={{color: "grey"}}>@{tweet.author.handle}&nbsp;</span>
                            <span style={{fontSize: "0.9em"}}>{moment(tweet.timestamp, moment.ISO_8601).format(' · MMM Do')}</span>
                        </span>
                        <span style={{margin: "10px 0"}}>{tweet.status}</span>
                        { tweet.media[0] ? <img style={{borderRadius: "10px", maxWidth: "100%"}} src={tweet.media[0].url} alt="Tweet Media"/> : null}
                        <TweetActions retweeted={tweet.retweetFrom ? tweet.retweetFrom : null}/>
                    </TweetWrapper>
                </span>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    border-bottom: 1px solid lightgray;
`;

const ProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const RetweetHeader = styled.span`
    margin-left: 40px;
    margin-top: 10px;
    font-size: 0.8em;
    display: inline-block;
`;

const TweetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;

    &:hover {
        cursor: pointer;
    }
`;

const ProfileEvent = styled.div`
    &:hover {
        cursor: pointer;
        border-bottom: 1px solid black;
    }
`;

export default TweetDetailFeed;