import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';


import PortfolioData from './portfolioData';
import './css/portfolio.css';
import OrbitronBold from '../../fonts/Orbitron-Bold.ttf';

import Project from './project/project';


class Portfolio extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            showPortfolio: false,
        }
    }

    componentDidMount(){
        this.setState({showPortfolio: true});
    }
    render() {
      return    <CSSTransition
          in={this.state.showPortfolio}
          timeout={300}
          classNames="fade"
      >
          <div id="PortfolioMainDiv" style={{fontFamily: OrbitronBold}} >
              <div className="AboutMainTitleDiv PortfolioText"> Portfolio</div><br/>
              <br/>
              {PortfolioData.projects.map((value, index) => {
                  return <Project key={index} projectData={value}/>
              })}
          </div>
        </CSSTransition>;
    }
}
export default Portfolio;