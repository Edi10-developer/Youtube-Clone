import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { SideMenuStyledDiv } from './SideMenu-styled';

const SideMenu = () => {
    return (
        <SideMenuStyledDiv>
            <Router>
                <Switch>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/chronology">History</Link>
                        </li>
                        <li>
                            <Link to="/liked-videos">Liked Videos</Link>
                        </li>
                    </ul>
                </Switch>
            </Router>
        </SideMenuStyledDiv>
    )
}

export default SideMenu;