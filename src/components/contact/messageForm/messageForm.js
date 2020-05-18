import React, {Component} from 'react';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import {Redirect} from 'react-router';
import {CSSTransition} from "react-transition-group";

import sendIcon from './images/send.png';
import './css/messageForm.css';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            inputNameValue: "Your Name?",
            inputContactValue: "Your Contact Info?",
            inputSubjectValue: "Your Reason For Contact?",
            loadingStatus: "",
            messageSent: false,
        };

        this.onChange = (editorState) => {
            this.setState({editorState});
        };

        this.setEditor = (editor) => {
            this.editor = editor;
        };

        this.focusEditor = () => {
            if (this.editor) {
                this.editor.focus();
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);

        this.sendMessage = this.sendMessage.bind(this);
        this.animateLoading = this.animateLoading.bind(this);
        this.errorSendingMessage = this.errorSendingMessage.bind(this);
        this.resetLoadingStatus = this.resetLoadingStatus.bind(this);
        this.messageSent = this.messageSent.bind(this);
    }

    animateLoading() {
        console.log("animation function");
        switch (this.state.loadingStatus) {
            case "":
                break;
            case ".":
                this.setState({
                    loadingStatus: ".."
                });
                break;
            case "..":
                this.setState({
                    loadingStatus: "..."
                });
                break;
            case "...":
                this.setState({
                    loadingStatus: "."
                });
                break;
        }
        if (this.state.loadingStatus !== "" && this.state.loadingStatus !== "ERROR") {
            window.setTimeout(function () {
                this.animateLoading();
            }.bind(this), 600);
        } else {
            console.log("loading animation done");
        }
    }

    handleFocusChange(event) {
        event.target.select();
    }

    handleInputChange(event) {
        if (event.currentTarget.id === "MessageFormNameInput") {
            this.setState({inputNameValue: event.target.value});
        } else if (event.currentTarget.id === "MessageFormContactInput") {
            this.setState({inputContactValue: event.target.value});
        } else if (event.currentTarget.id === "MessageFormSubjectInput") {
            this.setState({inputSubjectValue: event.target.value});
        }

    }

    handleEditorKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    componentDidMount() {
        this.setState({showContact: true});
        this.focusEditor();

    }

    sendMessage() {
        this.setState({loadingStatus: "."}, function () {
            this.animateLoading();
        }.bind(this));

        fetch('https://resources.digivigil.com/messageDrop/', {
            //fetch('http://messageDrop-develop/messageDrop/?XDEBUG_SESSION_START=PHPSTORM', {

            method: 'post',
            mode: 'cors',
            body: JSON.stringify({
                timeSent: Date.now(),
                status: "unread",
                from: this.state.inputNameValue,
                contact: this.state.inputContactValue,
                subject: this.state.inputSubjectValue,
                contentType: "draftJS",
                messageContent: convertToRaw(this.state.editorState.getCurrentContent())
            })

        }).then(function (response) {
            return response.json();
        }.bind(this)).then(function (json) {
            if (json.status === "error") {
                this.errorSendingMessage(json.message);
            } else {
                this.messageSent(json.messageKey);
            }
        }.bind(this)).catch(function (error) {
            console.log(error);
            this.errorSendingMessage(error);
        }.bind(this));
    }

    messageSent(messageKey) {
        this.setState({
            loadingStatus: "👍",
            messageSent: true,
            messageKey: messageKey
        });
    }

    errorSendingMessage(error) {
        this.setState({
            loadingStatus: "ERROR",
            errorMessage: error.toString()
        });
    }

    resetLoadingStatus() {
        this.setState({
            editorState: EditorState.createEmpty(),
            inputNameValue: "Your Name?",
            inputContactValue: "Your Contact Info?",
            inputSubjectValue: "Your Reason For Contact?",
            loadingStatus: "",
            messageSent: false,
        });
    }

    render() {
        return <>
            <div className={"MessageFormMainDiv"}>
                <div className={"MessageFormMessageGridDiv"}>
                    <div className={"MessageFormMessageDivTopGrid"}>
                        <div className={"MessageFormInputDiv"}>
                            From : <input id={"MessageFormNameInput"}
                                          className={"MessageFormInput"}
                                          type={"text"}
                                          value={this.state.inputNameValue}
                                          onChange={this.handleInputChange}
                                          onFocus={this.handleFocusChange}/>
                        </div>
                        <div className={"MessageFormInputDiv"}>
                            Reply To : <input id={"MessageFormContactInput"}
                                              className={"MessageFormInput"}
                                              type={"text"}
                                              value={this.state.inputContactValue}
                                              onChange={this.handleInputChange}
                                              onFocus={this.handleFocusChange}/>
                        </div>
                        <div className={"MessageFormInputDiv"}>
                            Subject : <input id={"MessageFormSubjectInput"}
                                             className={"MessageFormInput"}
                                             type={"text"}
                                             value={this.state.inputSubjectValue}
                                             onChange={this.handleInputChange}
                                             onFocus={this.handleFocusChange}/>
                        </div>
                    </div>
                    <div className={"MessageFormMessageDivMiddleGrid"} onClick={this.focusEditor}>
                        <Editor

                            ref={this.setEditor}
                            editorState={this.state.editorState}
                            handleKeyCommand={this.handleEditorKeyCommand}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className={"MessageFormMessageDivBottomGrid"}>
                        <div className={"MessageFormSendButtonDiv"} onClick={this.sendMessage}>
                            <div className="MessageFormSendButtonLabelDiv">Send Message</div>
                            <img className="MessageFormSendButtonImg" src={sendIcon}/>
                        </div>
                    </div>
                    <CSSTransition
                        in={(this.state.loadingStatus !== "")}

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
                        <div className={"MessageFormSendMessageOverlayDiv"}>
                            <CSSTransition
                                in={(!this.state.messageSent)}
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
                                <div className={"MessageFormSendMessageOverlayCenterDiv"}>
                                    <div className={"MessageFormSendMessageOverlayLabelDiv"}>Sending Message</div>
                                    <CSSTransition
                                        in={(this.state.loadingStatus !== "ERROR" && this.state.loadingStatus !== "")}
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
                                        <div
                                            className={"MessageFormSendMessageOverlayStatusDiv"}>{(this.state.loadingStatus !== "ERROR") ? this.state.loadingStatus : ""} </div>
                                    </CSSTransition>
                                    <CSSTransition
                                        in={(this.state.loadingStatus === "ERROR")}
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
                                        <div className={"MessageFormSendMessageOverlayErrorDiv"}>ERROR!</div>

                                    </CSSTransition>

                                </div>
                            </CSSTransition>
                            <CSSTransition
                                in={(this.state.loadingStatus === "ERROR")}
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
                                <div>
                                    <div className={"MessageFormSendMessageOverlayErrorLabelDiv"}>
                                        ERROR<br/>
                                        {this.state.errorMessage}
                                        <br/>
                                    </div>
                                    <div onClick={this.sendMessage}
                                         className={"MessageFormSendMessageOverlayButtonDiv"}>Try Again
                                    </div>
                                    <div onClick={this.resetLoadingStatus}
                                         className={"MessageFormSendMessageOverlayButtonDiv"}>Back
                                    </div>
                                </div>
                            </CSSTransition>
                            <CSSTransition in={this.state.messageSent}

                                           timeout={1000}
                                           classNames="fadeVideo"
                                           onEnter={function () {
                                               console.log("enter")
                                           }}
                                           onExit={function () {
                                               console.log("exit")
                                           }}
                                           mountOnEnter={true}>
                                <div>
                                    <div className={"MessageFormSendMessageOverlaySuccessLabelDiv"}>Message received,
                                        Thank You!
                                    </div>
                                    <div onClick={function () {
                                        this.setState({redirect: true})
                                    }.bind(this)}
                                         className={"MessageFormSendMessageOverlayButtonDiv"}>View Message Status
                                    </div>
                                    <div onClick={this.resetLoadingStatus}
                                         className={"MessageFormSendMessageOverlayButtonDiv"}>Back
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                    </CSSTransition>
                </div>
            </div>
            <CSSTransition in={this.state.messageSent}
                           timeout={1000}
                           classNames="fadeVideo"
                           mountOnEnter={true}>
                <div>
                    {(this.state.redirect === true) ?
                        <Redirect push to={"/contact/status/" + this.state.messageKey}/> : false}
                </div>
            </CSSTransition>
        </>
    }
}
export default MessageForm;