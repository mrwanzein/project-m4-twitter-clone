import React from 'react';
import styled from 'styled-components';

import moment from 'moment';
import { FiRepeat } from "react-icons/fi";

import TweetActions from "../MiniComponents/TweetActions";

const TweetDetailFeed = ({tweet}) => {
    return(
        <>
            {tweet.retweetFrom ? <RetweetHeader><FiRepeat /> {tweet.retweetFrom.displayName} Remeowed</RetweetHeader> : null}
            <Wrapper>
                <span style={{display: "flex", margin: "10px"}}>
                    <ProfilePic src={tweet.author.avatarSrc} alt="Profile avatar"/>
                    <div style={{display: "flex", flexDirection: "column", marginLeft: "5px"}}>
                        <span style={{display: "flex", alignItems: "center"}}>
                            <span style={{fontWeight: "bold"}}>{tweet.author.displayName}&nbsp;</span>
                            <span style={{color: "grey"}}>@{tweet.author.handle}&nbsp;</span>
                            <span style={{fontSize: "0.9em"}}>{moment(tweet.timestamp, moment.ISO_8601).format(' · MMM Do')}</span>
                        </span>
                        <span style={{margin: "10px 0"}}>{tweet.status}</span>
                        { tweet.media[0] ? <img style={{borderRadius: "10px", maxWidth: "100%"}} src={tweet.media[0].url} alt="Tweet Media"/> : null}
                        <TweetActions retweeted={tweet.retweetFrom ? tweet.retweetFrom : null}/>
                    </div>
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

export default TweetDetailFeed;