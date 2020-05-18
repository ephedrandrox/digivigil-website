import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import OrbitronRegular from '../../../fonts/Orbitron-Regular.ttf';
import OrbitronBold from '../../../fonts/Orbitron-Bold.ttf';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            font: OrbitronRegular,
            background: "none"
        }

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onRouteChanged = this.onRouteChanged.bind(this);

        this.state.classNames = "DigivigilMainMenuItem";

        if (this.isLinkPointingToRoute()) {
            this.state.classNames = "DigivigilMainMenuItem DigivigilMainMenuItemActive" + props.menuTitle;
            this.state.font = OrbitronBold;
        }

    }

    render() {
        return <div className={this.state.classNames} style={{fontFamily: this.state.font}}
                    onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            <div className="DigivigilMainMenuLabel">{this.props.menuTitle}</div>
        </div>;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    isLinkPointingToRoute() {
        if (this.props.location.pathname.indexOf("/" + this.props.menuTitle.toLowerCase()) >= 0) {
            return true;
        } else {
            return false;
        }
    }

    onRouteChanged() {
        if (this.isLinkPointingToRoute()) {
            this.setState({
                itemActive: true,
                font: OrbitronBold,
                classNames: "DigivigilMainMenuItem DigivigilMainMenuItemActive" + this.props.menuTitle
            });
        } else {
            this.setState({
                itemActive: false,
                font: OrbitronRegular,
                classNames: "DigivigilMainMenuItem"
            });
            return false;
        }
    }

    onMouseEnter(event) {
        this.setState({
            font: OrbitronBold,
            classNames: "DigivigilMainMenuItem DigivigilMainMenuItemActive" + this.props.menuTitle
        });
    }

    onMouseLeave() {
        if (this.isLinkPointingToRoute()) {
            this.setState({
                font: OrbitronBold,
                classNames: "DigivigilMainMenuItem DigivigilMainMenuItemActive" + this.props.menuTitle
            });
        } else {
            this.setState({
                font: OrbitronRegular,
                classNames: "DigivigilMainMenuItem"
            });
        }
    }
}

export default withRouter(props => <MenuItem {...props}/>);
