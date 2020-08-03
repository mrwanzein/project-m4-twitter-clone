import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';

import { RiArrowLeftLine } from "react-icons/ri";

import LoadingWheel from "../MiniComponents/LoadingWheel";
import ErrorScreen from "../MiniComponents/ErrorScreen";
import TweetActions from "../MiniComponents/TweetActions";

const TweetDetailBig = () => {
    const {tweetId} = useParams();
    const [data, setData] = React.useState(null);
    const [dataStatus, setDataStatus] = React.useState("fetching");

    React.useEffect(() => {
        fetch(`/api/tweet/${tweetId}`)
        .then(res => res.json())
        .then(data => {
            let {tweet} = data;
            setData(tweet);
            setDataStatus("fetched")
            console.log(JSON.stringify(tweet, null, 4))
        })
        .catch(err => {
            setDataStatus("error")
            console.log('Error: ', err)
        })
    }, [tweetId]);
    
    return(
        <>
            {dataStatus === "fetching" ? <LoadingWheel /> :
            dataStatus === "error" ? <ErrorScreen /> :
            <>
                <Header>
                    <Link exact to="/"><RiArrowLeftLine style={{marginLeft: "20px"}}/></Link><Meow>Meow</Meow>
                </Header>
                <Wrapper>
                    <ul>
                        <li>
                            <span style={{display: "flex"}}>
                                <ProfilePic src={data.author.avatarSrc} alt="Profile avatar"/>
                                <UserAliases>
                                    <span style={{fontWeight: "bold"}}>{data.author.displayName}</span>
                                    <span style={{color: "grey", marginTop: "3px"}}>@{data.author.handle}</span>
                                </UserAliases>
                            </span>
                        </li>
                        <li><span style={{fontSize: "1.3em"}}>{data.status}</span></li>
                        <li>{data.media[0] ? <img style={{borderRadius: "10px", maxWidth: "100%"}} src={data.media[0].url} alt="Tweet Media"/> : null}</li>
                        <li><span>{moment(data.timestamp, moment.ISO_8601).format('LT · MMM DD YYYY ')}· Critter web app</span></li>
                    </ul>
                    <div style={{borderTop: "1px solid lightgray"}}>
                        <TweetActions/>
                    </div>
                </Wrapper>
            </>
            }
        </>
    )
};

const Header = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
`;

const Meow = styled.span`
    font-size: 1.3em;
    margin-left: 20px;
    font-weight: bold;
`;

const Wrapper = styled.div`
    margin: 10px;
    border-bottom: 1px solid lightgray;

    ul > li {
        margin: 15px 0;
    }
`;

const UserAliases = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
`;

export default TweetDetailBig;