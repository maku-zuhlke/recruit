/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import { Sortable } from 'react-sortable';

class Block extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const block = this.props.item;

    return (<div id={block.id} {...this.props} className="btn btn-default block">
      {block.text}
    </div>);
  }
}

var SortableBlock = Sortable(Block);
export default SortableBlock
