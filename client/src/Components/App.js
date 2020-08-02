import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import SideBar from "./SideBar";
import ErrorScreen from "./MiniComponents/ErrorScreen";

import {CurrentUserContext} from "./CurrentUserContext";
import LoadingWheel from "./MiniComponents/LoadingWheel";

function App() {
  const {status, ErrorHappened} = React.useContext(CurrentUserContext);

  return (
    <Container>
    <GlobalStyles />
    <Router>
      <SideBar />

      <ComponentsRenderSpace>
            {status === "loading" ? <LoadingWheel /> :
            ErrorHappened.current ? <ErrorScreen /> :
            <Switch>
              <Route exact path='/'>
                <HomeFeed />
              </Route>
              
              <Route exact path='/notifications'>
                <Notifications />
              </Route>

              <Route exact path='/bookmarks'>
                <Bookmarks />
              </Route>

              <Route exact path='/tweet/:tweetId'>
                <TweetDetails />
              </Route>

              <Route exact path='/profile/:profileId'>
                <Profile />
              </Route>
            </Switch>}
      </ComponentsRenderSpace>
    </Router>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
`;

const ComponentsRenderSpace = styled.div`
    width: 40vw;
    border-right: 1px solid lightgray;
`;

export default App;
