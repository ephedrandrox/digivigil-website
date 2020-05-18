import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

import DigivigilLogo from "../../../logo/logo";

import OrbitronBold from '../../../../fonts/Orbitron-Bold.ttf';
import './css/statusView.css';


class StatusView extends Component {
    constructor(props) {

        super(props);
        this.state = {
            messageStatus: false
        };

        let thisSetState = this.setState.bind(this);
        fetch('https://resources.digivigil.com/messageDrop/getStatus.php', {
            //fetch('http://messagedrop-develop/messageDrop/getStatus.php',{
            method: 'post',
            mode: 'cors',
            body: JSON.stringify({
                timeSent: Date.now(),
                contentType: "draftJS",
                messageKey: this.props.match.params.messageKey
            })
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            thisSetState({messageStatus: json.messageStatus});
        }).catch(function (result) {
            //something is wrong
            console.log(result);
            thisSetState({messageStatus: undefined});
        });
    }

    render() {
        return <div className="statusViewDiv" style={{fontFamily: OrbitronBold}}>
            Thanks for sending us a message!<br/>
            <Link className={"statusLink"} to={"/contact/status/" + this.props.match.params.messageKey}>This is your
                link to this message status.</Link><br/>
            You can bookmark this page check status at later date.
            <br/><br/>
            {(this.state.messageStatus === undefined) ?
                <p>Could not retrieve message status</p>
                : (this.state.messageStatus === false) ?
                    <p>Loading Message Status</p>
                    : (this.state.messageStatus === "unread") ?
                        <p>We are looking forward to reading your message!</p>
                        : (this.state.messageStatus === "read") ?
                            <p> We have read your message and are working on a reply!</p>
                            : (this.state.messageStatus === "replied") ?
                                <p>We have read and replied to your message based on the information provided. If you
                                    have not received this reply, please send us another message with different contact
                                    information.</p>
                                : false
            }
            <br/>
            <br/>
            <Link to="/">
                <div className="statusViewLogoDiv">
                    <DigivigilLogo/>
                </div>
            </Link>
        </div>
    }
}

export default StatusView;