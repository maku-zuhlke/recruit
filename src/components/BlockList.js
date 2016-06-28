/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component, PropTypes } from 'react';
import SortableBlock from './SortableBlock'
import Win from './Win'

class BlockList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { draggingIndex: null, blocks: props.blocks };
  }

  updateState(obj) {
    this.props.actions.verifyOrder();
    this.setState(obj);
  }

  render() {
    var listItems = this.state.blocks.blocks.map(function(item, i) {
      return (
        <SortableBlock
          key={i}
          updateState={this.updateState.bind(this)}
          items={this.state.blocks.blocks}
          draggingIndex={this.state.draggingIndex}
          sortId={i}
          outline="list"
          item={item}/>
      );
    }, this);

    return (
      <div>
        <div className="col-xs-3"></div>
        <div className="col-xs-6 center space">{listItems}</div>
        <div className="col-xs-3"></div>
        {this.state.blocks.win && <Win />}
      </div>
    )
  }
}

export default BlockList
