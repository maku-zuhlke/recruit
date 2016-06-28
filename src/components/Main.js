require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import BlockList from './BlockList';

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  renderBlockList() {
    const { blocks, actions } = this.props;
    return(
      <BlockList blocks={blocks} actions={actions}/>
    )
  }

  render() {
    return (
      <div className="index">
        <div>{this.renderBlockList()}</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
