require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import BlockList from './BlockList';

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {startChallenge: false};

  }

  renderBlockList() {
    const { blocks, actions } = this.props;
    return(
      <BlockList blocks={blocks} actions={actions}/>
    )
  }

  start() {
    this.state.startChallenge = true;
    this.setState(this);
  }

  render() {
    return (
      <div className="index">
        <button className="btn btn-default" onClick={this.start.bind(this)}>Start challenge</button>
        { this.state.startChallenge && <div>{this.renderBlockList()}</div> }
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
