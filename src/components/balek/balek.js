import React, {Component} from 'react';

import './css/balek.css';

import OrbitronBold from '../../fonts/Orbitron-Bold.ttf';
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";

class Balek extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBalek: false,
            videoPath: "https://resources.digivigil.com/videos/",
            aboutVideoResolution: "720",
            demoVideoResolution: "720",
            deployVideoResolution: "720",
            buildVideoResolution: "720",

        }
    }

    componentDidMount() {
        this.setState({showBalek: true});
    }

    render() {
        return <CSSTransition
            in={this.state.showBalek}
            timeout={300}
            classNames="fade"
        >
            <div id="BalekMainDiv" style={{fontFamily: OrbitronBold}}>
                <div className="BalekMainTitleDiv"> Balek</div>
                <br/>
                <div className="BalekMainInfoDiv">
                    <div className="BalekMainInfoChooseResolutionDiv">
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.aboutVideoResolution === "720" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({aboutVideoResolution: "720"});
                            }.bind(this)}> HD
                        </div>
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.aboutVideoResolution === "1080" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({aboutVideoResolution: "1080"});
                            }.bind(this)}> Full HD
                        </div>
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.aboutVideoResolution === "" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({aboutVideoResolution: ""});
                            }.bind(this)}> 4K
                        </div>
                    </div>
                    <h2>About</h2>
                    A module based web application framework for building and deploying full stack javascript
                    applications. <br/><br/>
                    <video className="BalekMainInfoDivVideo" controls key={this.state.aboutVideoResolution}
                           poster="https://resources.digivigil.com/videos/aboutPoster.jpg">
                        <source
                            src={"https://resources.digivigil.com/videos/balekAbout" + this.state.aboutVideoResolution + ".m4v"}
                            type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <br/>
                </div>
                <div className="BalekMainInfoDiv">
                    <div className="BalekMainInfoChooseResolutionDiv">
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.demoVideoResolution === "720" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({demoVideoResolution: "720"});
                            }.bind(this)}> HD
                        </div>
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.demoVideoResolution === "1080" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({demoVideoResolution: "1080"});
                            }.bind(this)}> Full HD
                        </div>
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.demoVideoResolution === "" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({demoVideoResolution: ""});
                            }.bind(this)}> 4K
                        </div>
                    </div>
                    <h2>Demonstration</h2>
                    Offering common functionality to orchestrate a user based session environment on a server that can
                    be accessed through a browser.<br/><br/>
                    <video className="BalekMainInfoDivVideo" controls key={this.state.demoVideoResolution}
                           poster="https://resources.digivigil.com/videos/demoPoster.jpg">
                        <source
                            src={"https://resources.digivigil.com/videos/balekDemo" + this.state.demoVideoResolution + ".m4v"}
                            type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="BalekMainInfoDiv">
                    <div className="BalekMainInfoChooseResolutionDiv">
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.deployVideoResolution === "720" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({deployVideoResolution: "720"});
                            }.bind(this)}> HD
                        </div>
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.deployVideoResolution === "1080" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({deployVideoResolution: "1080"});
                            }.bind(this)}> Full HD
                        </div>
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.deployVideoResolution === "" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({deployVideoResolution: ""});
                            }.bind(this)}> 4K
                        </div>
                    </div>
                    <h2>Deploying</h2>
                    Balek allows modules to be developed independently, then built together into a deployable docker
                    image.<br/><br/>
                    <video className="BalekMainInfoDivVideo" controls key={this.state.deployVideoResolution}
                           poster="https://resources.digivigil.com/videos/deployPoster.jpg">
                        <source
                            src={"https://resources.digivigil.com/videos/balekDeploy" + this.state.deployVideoResolution + ".m4v"}
                            type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <br/>
                </div>
                <div className="BalekMainInfoDiv">
                    <div className="BalekMainInfoChooseResolutionDiv">
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.buildVideoResolution === "720" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({buildVideoResolution: "720"});
                            }.bind(this)}> HD
                        </div>
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.buildVideoResolution === "1080" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({buildVideoResolution: "1080"});
                            }.bind(this)}> Full HD
                        </div>
                        <div
                            className={`BalekMainInfoChooseResolutionMenuButton  ${this.state.buildVideoResolution === "" ? "activeVideoResolutionMenuButton" : false} `}
                            onMouseDown={function () {
                                this.setState({buildVideoResolution: ""});
                            }.bind(this)}> 4K
                        </div>
                    </div>
                    <h2>Building</h2>
                    There are two main steps in the build process for Balek<br/><br/>
                    <video className="BalekMainInfoDivVideo" controls key={this.state.buildVideoResolution}
                           poster="https://resources.digivigil.com/videos/buildPoster.jpg">
                        <source
                            src={"https://resources.digivigil.com/videos/balekBuild" + this.state.buildVideoResolution + ".m4v"}
                            type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <br/>
                    <br/>
                    More information about the building of docker images coming soon.
                </div>
                <div className="BalekMainInfoDiv">
                    <h2>Modules</h2><br/>
                    <div className={"BalekMainInfoDivVideo"} style={{lineHeight: "350px"}}> Modules Video Is under
                        development
                    </div>
                    <br/>
                </div>
                <div className="BalekMainInfoDiv">
                    <h2>Development</h2><br/>
                    <div className={"BalekMainInfoDivVideo"}><br/> <br/> <br/> <br/> <br/> Development Video Is under
                        development <br/>
                        <p style={{margin: "20px"}}> If there is interest from others that want to use Balek, and time
                            is available for us to do so, then more
                            documentation and features can be developed. If you would like to contribute, and or have
                            comments, questions, suggestions, etc, please send us a
                            <Link to={"/contact"}> Message</Link>!<br/></p>
                    </div>
                    <br/>
                </div>
            </div>
        </CSSTransition>
    }
}
export default Balek; // Don’t forget to use export default!