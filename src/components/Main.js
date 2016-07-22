require('normalize.css/normalize.css');
require('styles/App.styl');

import React from 'react';
import BlockList from './BlockList';

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { startChallenge: false };
  }

  renderBlockList() {
    const { blocks, actions, timer, timerActions } = this.props;
    return(
      <BlockList blocks={blocks} actions={actions} timer={timer} timerActions={timerActions} />
    )
  }

  start() {
    this.setState({ startChallenge : true });
  }

  render() {
    return (
      <div className="index">
        <div className="row">
          <div className="logo col-xs-3 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-2 col-lg-3 col-lg-offset-2"><span><img src="images/logo-zuhlke.png" /></span></div>
        </div>
        <div className="row">
          <div className="content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
            { !this.state.startChallenge && <button className="btn btn-default start" onClick={this.start.bind(this)}><span>Coding challenge</span></button> }
            { this.state.startChallenge && <div>{ this.renderBlockList() }</div> }
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
