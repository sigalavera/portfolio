import React from 'react';
import './SideBar.css';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import AppRounder from '../../AppRounder/AppRounder';

function SideBarComp() {
    const STYLE = { background: "rgba(0, 0, 0, 0.329)", color: "black"};
    const ICONSTAYLE = {color: "white", opacity: "1"};

    return (
        <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                        style={STYLE}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home" >
                            <NavItem eventKey="" >
                                <NavIcon style={{color:"black"}} >
                                    <HomeIcon className="iconsNav" style={ICONSTAYLE}/>
                                </NavIcon>
                                <NavText style={ICONSTAYLE}>
                                    Home
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="Skills">
                                <NavIcon >
                                    <LocalLibraryIcon className="iconsNav" style={ICONSTAYLE}/>
                                </NavIcon>
                                <NavText style={ICONSTAYLE}>
                                    Skills
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="Portfolio">
                                <NavIcon >
                                    <AssignmentIcon className="iconsNav" style={ICONSTAYLE}/>
                                </NavIcon>
                                <NavText style={ICONSTAYLE}>
                                    Portfolio
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="ContactMe">
                                <NavIcon >
                                    <PermContactCalendarIcon className="iconsNav" style={ICONSTAYLE}/>
                                </NavIcon>
                                <NavText style={ICONSTAYLE}>
                                    ContactMe
                                </NavText>
                            </NavItem>

                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <AppRounder/>
                    </main>
                </React.Fragment>
            )}
            />
        </Router>
    )
}
export default SideBarComp;