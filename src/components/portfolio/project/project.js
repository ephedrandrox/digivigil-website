import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";

import '../css/portfolio.css';
import '../css/transitions.css';

import OrbitronBold from '../../../fonts/Orbitron-Bold.ttf';

class Project extends Component {

    constructor(props) {
        super(props);

        this.videoSizeToStringArray = ["HD", "Full HD", "4K"];
        this.videoSizeToFileStringArray = ["720", "1080", ""];

        this.state = {
            showVideo: false,
            currentVideo: null,
            currentVideoPath: null,
            videoSize: 0,
            showVideoMenu: false
        }

        if (this.props.projectData.link && (this.props.projectData.link.indexOf("http") === 0 || this.props.projectData.link.indexOf(".m4v") === (this.props.projectData.link.length - 4))) {
            this.state.linkTarget = "_blank";
        } else {
            this.state.linkTarget = false;
        }

        this.state.screenSize = (window.screen.width * window.devicePixelRatio);
        if (this.state.screenSize > 1280) {
            this.state.videoSize = 1;
        }
        if (this.state.screenSize > 1920) {
            this.state.videoSize = 2;
        }

    }

    convertVideoPathToSize(videoPath, videoSize = this.state.videoSize) {
        let returnVideoPath = videoPath.substring(0, videoPath.length - 4) + this.videoSizeToFileStringArray[videoSize] + ".m4v";
        return returnVideoPath;
    }

    changeVideoSize(newSize) {
        this.setState({
            videoSize: newSize,
            currentVideoPath: this.convertVideoPathToSize(this.state.currentVideo, newSize)
        });
    }

    render() {
        let element =
            <div className={"PortfolioProjectDiv"}>
                <div className="PortfolioProjectGrid">
                    <div className="PortfolioProjectLeftTopSpace">
                        <a href={this.props.projectData.link && this.props.projectData.link.indexOf(".m4v") === (this.props.projectData.link.length - 4)
                            ? undefined
                            : this.props.projectData.link}
                           target={this.state.linkTarget ? this.state.linkTarget : undefined}
                           onMouseDown={this.props.projectData.link &&
                           this.props.projectData.link.indexOf(".m4v") === (this.props.projectData.link.length - 4)
                               ? function () {
                                   this.setState({
                                       showVideo: true,
                                       currentVideo: this.props.projectData.link,
                                   })
                               }.bind(this)
                               : undefined}>
                            <div className="PortfolioProjectImageDiv">
                                <img className="PortfolioProjectImage" src={this.props.projectData.thumbImage}/>
                            </div>
                        </a>
                    </div>
                    <div className="PortfolioProjectLeftBottomSpace">
                        <div className="PortfolioProjectNameDiv">{this.props.projectData.name}</div>
                    </div>
                    <div className="PortfolioProjectRightSpace">
                        <div className="PortfolioProjectDescriptionDiv">{this.props.projectData.description}</div>
                        <div
                            className="PortfolioProjectTechnologiesDiv">{this.props.projectData.technologies.join(" | ")}</div>
                        <div className="PortfolioProjectResourcesDivSeparator"></div>
                        <div className="PortfolioProjectResourcesDiv" style={{fontFamily: OrbitronBold}}>
                            <p className="PortfolioProjectResourcesHeading">Resources</p>
                            {this.props.projectData.resources.map((resource) => {
                                let returnElement = "";
                                if (resource.type === "Video") {
                                    returnElement = <div className={"resourceDiv"} key={resource.label}
                                                         onMouseDown={function () {
                                                             this.setState({
                                                                 showVideo: true,
                                                                 currentVideoPath: this.convertVideoPathToSize(resource.link),
                                                                 currentVideoPosterPath: resource.poster,
                                                                 currentVideo: resource.link
                                                             })
                                                         }.bind(this)}>
                                        <img className="resourceIconImg" src={resource.icon}/>
                                        <br/>
                                        {resource.label}
                                    </div>
                                } else if (resource.type === "local") {
                                    returnElement = <div className={"resourceDiv"} key={resource.label}>
                                        <Link to={resource.link}>
                                            <img className="resourceIconImg" src={resource.icon}/>
                                            <br/>
                                            {resource.label}
                                        </Link>
                                    </div>
                                } else {
                                    returnElement = <div className={"resourceDiv"} key={resource.label}>
                                        <a href={resource.link} target={"_blank"}>
                                            <img className="resourceIconImg" src={resource.icon}/>
                                            <br/>
                                            {resource.label}
                                        </a>
                                    </div>
                                }
                                return returnElement
                            })}
                        </div>
                    </div>
                </div>
                <CSSTransition
                    in={this.state.showVideo}

                    timeout={1000}
                    classNames="fadeVideo"
                    onEnter={function () {
                        console.log("enter")
                    }}
                    onExit={function () {
                        console.log("exit")
                    }}
                    mountOnEnter={true}

                >
                    <div className={"PortfolioProjectVideoOverlayDivCloseButton"} onMouseDown={function () {
                        this.setState({showVideo: false, showVideoMenu: false});
                        this.refs.videoElement.pause();
                    }.bind(this)}>
                        Close Video
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={this.state.showVideo}

                    timeout={1000}
                    classNames="fadeVideo"
                    onEnter={function () {
                        console.log("enter")
                    }}
                    onExit={function () {
                        console.log("exit")
                    }}
                    mountOnEnter={true}

                >
                    <div className={"PortfolioProjectVideoOverlayDivVideoResolution"} onMouseDown={function () {

                        this.setState({showVideoMenu: !this.state.showVideoMenu});
                    }.bind(this)}>
                        <br/> Change {this.videoSizeToStringArray[this.state.videoSize]}
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={this.state.showVideo}

                    timeout={1000}
                    classNames="fadeVideo"
                    onEnter={function () {
                        console.log("enter")
                    }}
                    onExit={function () {
                        console.log("exit")
                    }}
                    mountOnEnter={true}

                >
                    <div className={"PortfolioProjectVideoOverlayDiv"}>

                        <video ref="videoElement" key={this.state.currentVideoPath}
                               className={"PortfolioProjectVideoOverlayDivVideo"} controls
                               poster={this.state.currentVideoPosterPath}>
                            <source src={this.state.currentVideoPath} type="video/mp4"/>

                            Your browser does not support the video tag.
                        </video>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={this.state.showVideoMenu}

                    timeout={1000}
                    classNames="fadeVideo"
                    onEnter={function () {
                        console.log("enter")
                    }}
                    onExit={function () {
                        console.log("exit")
                    }}
                    mountOnEnter={true}

                >
                    <div className={"PortfolioProjectVideoOverlayDivVideoResolutionMenu"} onMouseDown={function () {
                        this.setState({showVideoMenu: false});
                    }.bind(this)}>
                        <div className={"PortfolioProjectVideoOverlayDivVideoResolutionMenuButton"}
                             onMouseDown={function () {
                                 this.changeVideoSize(0);
                             }.bind(this)}> HD
                        </div>
                        <div className={"PortfolioProjectVideoOverlayDivVideoResolutionMenuButton"}
                             onMouseDown={function () {
                                 this.changeVideoSize(1);
                             }.bind(this)}> Full HD
                        </div>
                        <div className={"PortfolioProjectVideoOverlayDivVideoResolutionMenuButton"}
                             onMouseDown={function () {
                                 this.changeVideoSize(2);
                             }.bind(this)}> 4K
                        </div>
                    </div>
                </CSSTransition>
            </div>
        ;
        return element;
    }
}
export default Project;