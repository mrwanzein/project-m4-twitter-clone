import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';

import {CurrentUserContext} from "../CurrentUserContext";
import UnstyledButton from '../UnstyledButton';
import { RiArrowLeftLine } from "react-icons/ri";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import {COLORS} from "../constants";

const ProfileInfo = ({correctUser}) => {
    const {currentUser} = React.useContext(CurrentUserContext);
    
    return(
        <>
            <Header>
                <Link exact={"true"} to="/"><RiArrowLeftLine style={{marginLeft: "20px"}}/></Link><ProfileName>{correctUser.displayName}</ProfileName>
            </Header>
            <div style={{height: "200px", backgroundImage: `url(${correctUser.bannerSrc})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <ProfilePic src={correctUser.avatarSrc} alt="avatar picture"/>
            </div>
            <FollowBtn>{correctUser.handle === currentUser.handle ? "Edit Profile" : "Follow"}</FollowBtn>
            <UserInfo>
                <ul>
                    <li>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span style={{fontWeight: "bold"}}>{correctUser.displayName}</span>
                            <span style={{fontSize: "0.8em"}}>@{correctUser.handle}</span>
                        </div>
                    </li>
                    <li>{correctUser.bio}</li>
                    <li><span><FiMapPin /> {correctUser.location}</span>&nbsp;&nbsp;<span><FiCalendar /> Joined {moment(correctUser.joined, moment.ISO_8601).format('MMMM YYYY')}</span></li>
                    <li><span>{correctUser.numFollowing} Following</span>&nbsp;&nbsp;<span>{correctUser.numFollowers} Followers</span></li>
                </ul>
            </UserInfo>
        </>
    )
}

const Header = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
`;

const ProfileName = styled.span`
    font-size: 1.2em;
    margin-left: 20px;
    font-weight: bold;
`;

const ProfilePic = styled.img`
    position: relative;
    height: 100px;
    width: 100px;
    top: 75%;
    left: 10px;
    border-radius: 50%;
    border: 3px solid white;
`;

const FollowBtn = styled(UnstyledButton)`
    color: white;
    background-color: ${COLORS.primary};
    padding: 10px 15px;
    border-radius: 30px;
    margin: 30px 20px 0 auto;
    font-weight: bold;
`;

const UserInfo = styled.div`
    margin-left: 10px;

    ul > li {
        margin: 15px 0;
    }
`;

export default ProfileInfo