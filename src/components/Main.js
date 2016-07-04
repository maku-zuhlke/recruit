require('normalize.css/normalize.css');
require('styles/App.css');
require('../../node_modules/prismjs/themes/prism.css');

import React from 'react';
import BlockList from './BlockList';

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { startChallenge: false };
  }

  renderBlockList() {
    const { blocks, actions } = this.props;
    return(
      <BlockList blocks={blocks} actions={actions}/>
    )
  }

  start() {
    this.setState({ startChallenge : true });
  }

  render() {
    return (
      <div className="index">
        <div className="center">{ !this.state.startChallenge && <button className="btn btn-default start" onClick={this.start.bind(this)}>Start challenge</button> }</div>
        { this.state.startChallenge && <div>{this.renderBlockList()}</div> }
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
