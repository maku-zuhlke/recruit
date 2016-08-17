require('normalize.css/normalize.css');
require('styles/App2.styl');

import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';

class AppComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="index">
        <div className="row logoRow">
          <div className="logo col-xs-3 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-2 col-lg-3 col-lg-offset-2"><span><img src="images/logo-zuhlke.png"/></span></div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true })) (AppComponent);
