/**
 * Created by lewa on 10/08/2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { codingChallengeButton, puzzleChallengeButton, registerButton, welcomeText} from '../data/strings';
import Registration from './Registration'
class Menu extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <div className="contentRow row">
        <div className="content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
          <div className="welcome" >
            <h1> {welcomeText} </h1>
            </div>
          <Link to="/coding" className="btn btn-default start btn-lg"><span>{codingChallengeButton}</span></Link>
          <Link to="/puzzle" className="btn btn-default start btn-lg"><span>{puzzleChallengeButton}</span></Link>
          <Link to="/offlineRegistration" className="btn btn-default start btn-lg"><span>{registerButton}</span></Link>
//          <button className="btn btn-default start btn-lg" onClick={Registration.openRegistrationInNewTab.bind(this)}><span>{registerButton}</span></button>
        </div>
      </div>
    );
  }
}

export default Menu;
