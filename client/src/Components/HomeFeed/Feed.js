import React from 'react';
import TweetDetailFeed from "../TweetDetails/TweetDetailFeed";
import LoadingWheel from "../MiniComponents/LoadingWheel";
import ErrorScreen from "../MiniComponents/ErrorScreen";

const Feed = ({fetchAfterTweet}) => {
    const [data, setData] = React.useState(null);
    const [dataStatus, setDataStatus] = React.useState("fetching");

    React.useEffect(() => {
        fetch("/api/me/home-feed")
        .then(res => res.json())
        .then(data => {
            setData(data);
            setDataStatus("fetched")
            console.log(data)
        })
        .catch(err => {
            setDataStatus("error")
            console.log('Error: ', err)
        })
    }, [fetchAfterTweet]);

    return (
        <>
            {
                dataStatus === "fetching" ? <LoadingWheel /> :
                dataStatus === "error" ? <ErrorScreen /> :
                data.tweetIds.map(id => {
                    return <TweetDetailFeed key={id} tweet={data.tweetsById[id]} id={id}/>
                })
            }
        </>
    )
}

export default Feed;