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

import {CurrentUserContext} from "./CurrentUserContext"; 

function App() {
  const {status} = React.useContext(CurrentUserContext);

  return (
    <Container>
    <GlobalStyles />
    <Router>
      <SideBar />

      <ComponentsRenderSpace>
            {status === "loading" ? "loading..." : 
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
    flex-grow: 1;
`;

export default App;
