import React, {Component} from 'react';

import DigivigilLogo from '../logo/logo';


import './css/about.css';
import myImage from './images/me.jpg';
import linkedinImage from './images/LinkedIn_Logo.svg';
import githubImage from './images/GitHub_Logo.png'

import OrbitronBold from '../../fonts/Orbitron-Bold.ttf';
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";


class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showAbout: false,
        }
    }

    componentDidMount() {
        this.setState({showAbout: true});
    }

    render() {
        return <CSSTransition
            in={this.state.showAbout}
            timeout={300}
            classNames="fade"
        >
            <div id="AboutMainDiv" style={{fontFamily: OrbitronBold}}>
                <div className="AboutMainTitleDiv"> About</div>

                <br/>

                <br/>
                <br/> <br/>
                <div className="AboutMainInfoDiv" style={{textAlign: "left"}}>
                    <div style={{
                        position: "relative",
                        width: "150px",
                        height: "150px",
                        margin: "auto",
                        marginRight: "40px",
                        marginBottom: "20px",
                        float: "left"
                    }}>
                        <DigivigilLogo/>
                    </div>
                    <br/>
                    What is Digivigil? The name under which I offer services as a freelance
                    developer. This site includes a <Link to="/portfolio">Portfolio</Link> of my recent works for those
                    considering my <Link to="/services">Services.</Link>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="AboutMainInfoDiv" style={{textAlign: "left"}}>
                    <img alt="Picture of me out hunting for Chanterelle mushrooms" className="AboutMainMeImage"
                         src={myImage} style={{marginRight: "50px", marginBottom: "20px"}}/>
                    My first install of Linux was Slackware Distribution with an Intel 386 processor back in the year
                    1996. It was connected to the Internet via a 14.4 baud modem and acted as a NAT/Firewall for my LAN.
                    Since then I have pursued a diverse array of learning experiences and my skills have grown with the
                    capabilities of technology. Today I enjoy building Full Stack JavaScript Applications, Farming,
                    Family, and Fun!
                    <div className="AboutMainMeLinksDiv">
                        <br/>
                        <br/>
                        <a href="https://linkedin.com/in/blake-glanville-b0538832/" target="_blank">
                            <div className="linkDiv"><img className="linkImage" alt="Linkedin Logo"
                                                          src={linkedinImage}/></div>
                        </a>
                        <a href="https://www.github.com/ephedrandrox/" target="_blank">
                            <div className="linkDiv"><img className="linkImage" alt="Github Logo" src={githubImage}/>
                            </div>
                        </a>
                    </div>
                </div>

                <br/>
                <br/>
                <br/><br/>
                <div className="AboutMainInfoDiv">

                    <h2 style={{margin: "0", marginBottom: "20px"}}> Special Thanks</h2>
                    <a href="https://cloud.google.com/" title="Google Cloud" target="_blank">Google Cloud</a> | <a
                    href="https://reactjs.org/" target="_blank" title="React">React</a> | <a
                    href="https://webpack.js.org" target="_blank" title="Webpack">Webpack</a>
                    <div><br/>
                        Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" target="_blank"
                                         title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/"
                                                                                       target="_blank"
                                                                                       title="Flaticon">www.flaticon.com</a>
                    </div>
                    <br/> <a href="https://www.colorzilla.com/gradient-editor/" target="_blank" title="ColorZilla">ColorZilla
                    CSS Gradient Generator</a>

                    <br/>
                </div>
            </div>
        </CSSTransition>
    }
}

export default About;