import React, {Component} from 'react';

import './css/logo.css';

let element =
    <div id="DigivigilLogo">
        <img alt="Digivigil Logo" id="DigivigilImage" src={require('./images/DigivigilLogoText.svg')}/>
    </div>
;

class DigivigilLogo extends Component {
    render() {
        return element;
    }
}

export default DigivigilLogo;