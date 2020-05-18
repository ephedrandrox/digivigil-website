import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";

import './css/services.css';
import servicesSVG from './images/gear.svg';
import OrbitronBold from '../../fonts/Orbitron-Bold.ttf';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showServices: false,
        }
    }

    componentDidMount() {
        this.setState({showServices: true});
    }

    render() {
        return <CSSTransition
            in={this.state.showServices}
            timeout={300}
            classNames="fade"
        >
            <div id="ServicesMainDiv" style={{fontFamily: OrbitronBold}}>
                <div className="AboutMainTitleDiv ServicesText"> Services</div>
                <br/><br/><br/>
                <div className="ServicesMainInfoDiv"
                     style={{fontFamily: OrbitronBold, color: "#cdcd01", paddingLeft: "50px", paddingRight: "50px"}}>
                    <img alt="Services Logo" className="servicesSVG" src={servicesSVG}/>
                    <br/><br/>
                    Below is an overview of services offered. For more information or specific requests please use
                    the <Link to="/contact">Contact</Link> section of the website to send us a message.
                </div>
                <br/><br/><br/><br/>
                <div className="ServicesMainInfoDiv" style={{
                    fontFamily: OrbitronBold,
                    color: "#cdcd01",
                    textAlign: "left",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    backgroundSize: "cover"
                }}>
                    <h2>Design:</h2>

                    <li>Full Stack System Design</li>
                    <li>Cloud Deployable</li>
                    <li>Effiecient</li>
                    <li>Responsive</li>
                    <li>Data Separated</li>
                    <li>Modern</li>


                    <br/><h2>Development:</h2>
                    <li>Full Stack Scalable Web Application</li>
                    <li>Single Page Application Website</li>
                    <li>Websocket Modules</li>
                    <li>SVG/CSS Animations</li>
                    <br/>

                    <h2>Configuration/Deployment</h2>
                    <li>Docker</li>
                    <li>Webpack</li>
                    <li>Closure</li>
                    <li>Google Cloud</li>
                    <li>Openshift</li>
                    <li>LAN</li>
                    <br/>

                    <h2>Maintenance/Administration</h2>
                    <li>Servers</li>
                    <li>Websites</li>
                    <li>Databases</li>
                    <br/>

                    <h2>Consultation:</h2>
                    <li>Digital Transformation</li>
                    <li>Tutor Sessions</li>
                    <br/>
                </div>
                <br/><br/><br/>
                <div className="ServicesMainInfoDiv" style={{
                    fontFamily: OrbitronBold,
                    color: "#cdcd01",
                    border: "solid #cdcd01 5px",
                    paddingLeft: "50px",
                    paddingRight: "50px"
                }}>
                    <img alt="Services Logo" className="servicesSVG" style={{float: "right", paddingTop: "20px"}}
                         src={servicesSVG}/>
                    <br/><br/>
                    Familiarity with many technologies combined with the ability to learn quickly, creates suitability
                    for many tasks not outlined above. Please send us a <Link to="/contact">Message</Link> with any
                    comments, questions, or requests.
                    <br/>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </CSSTransition>;
    }
}
export default Services;