/**
 * Created by lewa on 10/08/2016.
 */

import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <div className="contentRow row">
        <div className="content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
          <Link to="/coding" className="btn btn-default start"><span>Coding challenge</span></Link>
          <Link to="/puzzle" className="btn btn-default start"><span>Puzzle challenge</span></Link>
        </div>
      </div>
    )
  };
}

export default Menu;
