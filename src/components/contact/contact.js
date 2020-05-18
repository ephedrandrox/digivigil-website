import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import MessageForm from './messageForm/messageForm';

import './css/contact.css';
import OrbitronBold from '../../fonts/Orbitron-Bold.ttf';
import Status from "./status/status";

import {
    Route,
    Switch
} from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showContact: false,
            readyToSendData: false,
        }
    }

    componentDidMount() {
        this.setState({showContact: true});
    }

    render() {
        return <CSSTransition
            in={this.state.showContact}
            timeout={300}
            classNames="fade"
        >
            <Switch>
                <Route exact path="/contact">
                    <div className={"mainViewRouteContainerDiv"}>
                        <div id="ContactMainDiv" style={{fontFamily: OrbitronBold}}>
                            <div className="AboutMainTitleDiv ContactText">Contact</div>
                            <br/>
                            <br/>
                            Please, send us a message! Questions? Comments? Interested in Services?<br/>
                            <br/>
                            <MessageForm/>
                            <br/>
                            <br/>
                            After sending a message, you will be provided with a link to check its status.
                            <br/>
                            <br/>
                            To send a note, readable by all, visit our <a target="_blank" rel="noopener noreferrer"
                                                                          href={"https://guestbook.digivigil.com/release/"}>Guestbook</a>
                        </div>
                    </div>
                </Route>
                <Route path="/contact/status" component={Status}>
                </Route>
            </Switch>
        </CSSTransition>
    }
}

export default Contact;