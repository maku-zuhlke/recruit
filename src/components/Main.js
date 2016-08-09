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
        <div className={this.state.rowClass + " row"}>
          <div className={this.state.contentClass + " col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center"}>
            { !(this.state.startCoding || this.state.startPuzzle) &&
              <div>
                <button className="btn btn-default start" onClick={this.startCoding.bind(this)}><span className="test">Coding challenge</span></button>
                <button className="btn btn-default start" onClick={this.startPuzzle.bind(this)}><span className="test">Puzzle challenge</span></button>
              </div>
            }
            { (this.state.startPuzzle && !this.state.startCoding) && <div className="challenge"><MatchstickPuzzle /></div> }
            { (!this.state.startPuzzle && this.state.startCoding) && <div className="challenge"><BlockList /></div> }
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default DragDropContext(TouchBackend({ enableMouseEvents: true })) (AppComponent);
