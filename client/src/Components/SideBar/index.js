import React from 'react';
import { NavLink } from "react-router-dom";
import {FiHome, FiUser, FiBell, FiBookmark} from "react-icons/fi";
import { ReactComponent as Critter } from "../../assets/logo.svg";


import styled from "styled-components";
import { COLORS } from "../constants";

const SideBar = () => {
    return(
        <SideBarStyle>
            <AlignLinksRight>
                <ul>
                    <li><Critter/></li>
                    <li><NavigationLink exact to="/"><FiHome /> Home</NavigationLink></li>
                    <li><NavigationLink exact to="/profile/abc"><FiUser /> Profile</NavigationLink></li>
                    <li><NavigationLink exact to="/notifications"><FiBell /> Notifications</NavigationLink></li>
                    <li><NavigationLink exact to="/bookmarks"><FiBookmark /> Bookmarks</NavigationLink></li>
                </ul>
            </AlignLinksRight>
        </SideBarStyle>
    )
}

const SideBarStyle = styled.div`
    width: 30vw;
    height: 100vh;
    border-right: 1px solid lightgray;
`;

const AlignLinksRight = styled.div`
    display: flex;
    justify-content: flex-end;

    ul > li {
        margin: 25px 0;
    }
`;

const NavigationLink = styled(NavLink)`
    font-size: 2.5em;
    color: black;
    padding: 15px 20px;
    border-radius: 40px;

    &.active {
        color: ${COLORS.primary};
    }

    &:hover {
        background-color: rgb(234, 213, 247);
    }
`;

export default SideBar;