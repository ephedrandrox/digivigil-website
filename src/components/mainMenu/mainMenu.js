import React, { Component } from 'react';
import {Link} from "react-router-dom";

import MenuItem from './menuItem/menuItem';
import './css/mainMenu.css';

class MainMenu extends Component {
    render() {
        return    <>
            <div id="DigivigilMainMenu">
                <Link to="/about"><MenuItem menuTitle="About"/></Link>
                <Link to="/services"><MenuItem menuTitle="Services"/></Link>
                <Link to="/portfolio"><MenuItem menuTitle="Portfolio"/></Link>
                <Link to="/contact"><MenuItem menuTitle="Contact"/></Link>
            </div>
            <div id="DigivigilMainMenuSpacer" />
        </>
    }
}
export default MainMenu;