import { Search } from '@material-ui/icons'
import React, { Component } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import '../css/header.css'; 

import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import { Avatar, IconButton } from '@material-ui/core';

import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header_left">
                    <img src="/images/facebook-logo.jfif" alt="Logo" />

                    <div className="header_search">
                        <Search />
                        <input type="text" placeholder="Search facebook" />
                    </div>
                </div>

                <div className="header_middle">
                    <div className="header_option header_option--active">
                        <HomeIcon fontSize="large" />
                    </div>
                    <div className="header_option">
                        <OndemandVideoIcon fontSize="large" />
                    </div>
                    <div className="header_option">
                        <PeopleIcon fontSize="large" />
                    </div>
                    <div className="header_option">
                        <SportsEsportsIcon fontSize="large" />
                    </div>
                </div>

                <div className="header_right">
                    <div className="header_info">
                        <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQHc6WbJ14wUig/profile-displayphoto-shrink_200_200/0/1593549243551?e=1644451200&v=beta&t=VukOEYIwRBMkzlMB7xW6wpGwhMdJLWoAUg_URGN21H0" />
                        <h5>Salatiel fiore</h5>
                    </div>

                    <IconButton>
                        <AppsIcon />
                    </IconButton>

                    <IconButton>
                        <ForumIcon />
                    </IconButton>

                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    
                </div>
            </div>
        )
    }
}
