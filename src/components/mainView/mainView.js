import React, {useState, Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './css/transitions.css';
import './css/mainView.css';

import DigivigilLogo from '../logo/logo';
import MainMenu from '../mainMenu/mainMenu';
import About from '../about/about';
import Services from '../services/services';
import Portfolio from '../portfolio/portfolio';

const Contact = React.lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "contact" */ '../contact/contact'));
const Balek = React.lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "contact" */ '../balek/balek'));


class MainView extends React.Component {

    constructor(props) {
        super(props);

        this.getSuspendedContactComponent = this.getSuspendedContactComponent.bind(this);
        this.getSuspendedBalekComponent = this.getSuspendedBalekComponent.bind(this);

    }

    getSuspendedContactComponent() {
        return props => <React.Suspense fallback="Loading">
            <Contact {...props}/>
        </React.Suspense>
    }

    getSuspendedBalekComponent() {
        return props => <React.Suspense fallback="Loading">
            <Balek {...props}/>
        </React.Suspense>
    }

    render() {
        return <Router>
            <div className="mainViewMainDiv">
                <MainMenu/>
                <Switch>
                    <Route path="/about">
                        <div className={"mainViewRouteContainerDiv"}>
                            <About/>
                        </div>
                    </Route>
                    <Route path="/services">
                        <div className={"mainViewRouteContainerDiv"}>
                            <Services/>
                        </div>
                    </Route>
                    <Route path="/portfolio">
                        <div className={"mainViewRouteContainerDiv"}>
                            <Portfolio/>
                        </div>
                    </Route>
                    <Route path="/contact" component={this.getSuspendedContactComponent()} fallback="Loading">
                    </Route>
                    <Route path="/balek" component={this.getSuspendedBalekComponent()} fallback="Loading">
                    </Route>
                    <Route path="/">
                        <div className={"mainViewLogoContainer"}>
                            <DigivigilLogo/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    }
}
export default MainView;