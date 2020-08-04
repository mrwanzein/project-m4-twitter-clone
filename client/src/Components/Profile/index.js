import React from 'react';
import { useParams } from 'react-router-dom';

import ProfileInfo from "./ProfileInfo";
import {CurrentUserContext} from "../CurrentUserContext";
import ProfileActions from "./ProfileActions";
import TweetDetailFeed from "../TweetDetails/TweetDetailFeed";
import LoadingWheel from "../MiniComponents/LoadingWheel";
import ErrorScreen from "../MiniComponents/ErrorScreen";


const Profile = () => {
    const {currentUser} = React.useContext(CurrentUserContext);
    const {profileId} = useParams();
    
    const [profileData, setProfileData] = React.useState(null);
    const [feedData, setFeedData] = React.useState(null);
    const [dataStatus, setDataStatus] = React.useState("fetching");
    const [feedDataStatus, setFeedDataStatus] = React.useState("fetching");

    React.useEffect(() => {

        if(profileId !== currentUser.handle){
            fetch(`/api/${profileId}/profile`)
            .then(res => res.json())
            .then(data => {
                let {profile} = data;
                setProfileData(profile);
                setDataStatus("fetched");
                console.log(data)
            })
            .catch(err => {
                setDataStatus("error");
                console.log('Error: ', err);
            })

            fetch(`/api/${profileId}/feed`)
            .then(res => res.json())
            .then(data => {
                setFeedData(data);
                setFeedDataStatus("fetched");
                console.log(data)
            })
            .catch(err => {
                setFeedDataStatus("error");
                console.log('Error: ', err);
            })
        } else {
            fetch(`/api/${currentUser.handle}/feed`)
            .then(res => res.json())
            .then(data => {
                setFeedData(data);
                setFeedDataStatus("fetched");
                setDataStatus("fetched");
                console.log(data)
            })
            .catch(err => {
                setFeedDataStatus("error");
                console.log('Error: ', err);
            })
        }
        
    }, [currentUser.handle, profileId]);
    
    return(
        <>
            {
                dataStatus === "fetching" ? <LoadingWheel /> :
                dataStatus === "error" ? <ErrorScreen /> :
                profileId !== currentUser.handle ? <ProfileInfo correctUser={profileData}/> : <ProfileInfo correctUser={currentUser}/>
            }
            <ProfileActions />
            {
                feedDataStatus === "fetching" ? <LoadingWheel /> :
                feedDataStatus === "error" ? <ErrorScreen /> :
                feedData.tweetIds.map(id => {
                    return <TweetDetailFeed key={id} tweet={feedData.tweetsById[id]} id={id}/>
                })
            }
        </>
    )
};

export default Profile;