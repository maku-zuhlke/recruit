require('normalize.css/normalize.css');
require('styles/App.styl');

import React from 'react';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import BlockList from './BlockChallenge/BlockList';
import MatchstickPuzzle from './MatchPuzzle/MatchstickPuzzle';

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { startCoding: false, startPuzzle: false, contentClass: "content", rowClass: "contentRow"};
  }

  startCoding() {
    this.setState({ startCoding : true });
  }

  startPuzzle() {
    this.setState({ startPuzzle : true, contentClass: 'contentPuzzle', rowClass: 'puzzleRow' });
  }

  render() {
    return (
      <div className="index">
        <div className="row logoRow">
          <div className="logo col-xs-3 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-2 col-lg-3 col-lg-offset-2"><span><img src="images/logo-zuhlke.png" /></span></div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true })) (AppComponent);
