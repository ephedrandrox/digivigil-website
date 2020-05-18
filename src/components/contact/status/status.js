import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';


import OrbitronBold from '../../../fonts/Orbitron-Bold.ttf';
import StatusView from "./statusView/statusView";

import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";

class Status extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showContact: false,
            redirect: false,
            messageKey: "localhost5ebf401b3719e"
        }
    }

    componentDidMount() {
        this.setState({showContact: true});

        this.loadStatus = this.loadStatus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleFocusChange(event) {
        event.target.select();
    }

    handleInputChange(event) {
        if (event.currentTarget.id === "MessageFormKeyInput") {
            this.setState({messageKey: event.target.value});
        }
    }

    loadStatus() {
        this.setState({redirect: true});
    }

    render() {
        return <CSSTransition
            in={this.state.showContact}
            timeout={300}
            classNames="fade"
        >
            <div className={"mainViewRouteContainerDiv"}>
                <div id="ContactMainDiv" style={{fontFamily: OrbitronBold}}>
                    <h1>Message Status</h1>
                    <Switch>
                        <Route path="/contact/status/:messageKey" component={StatusView}>
                        </Route>
                        <Route path="/contact/status/">
                            <div onMouseDown={this.loadStatus}>
                                Enter Message Key: <input id={"MessageFormKeyInput"}
                                                          className={"MessageKeyInput"}
                                                          type={"text"}
                                                          value={this.state.messageKey}
                                                          onChange={this.handleInputChange}
                                                          onFocus={this.handleFocusChange}/>
                            </div>
                            <div>
                                {(this.state.redirect === true) ?
                                    <Redirect push to={"/contact/status/" + this.state.messageKey}/> : false}
                            </div>
                        </Route>
                    </Switch>
                    <br/>
                </div>
            </div>
        </CSSTransition>
    }
}

export default Status;