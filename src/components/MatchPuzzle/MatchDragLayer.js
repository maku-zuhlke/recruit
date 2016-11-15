/**
 * Created by lewa on 20/07/2016.
 */
'use strict';
import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}


function getItemStyles(props) {
  const { currentOffset } = props;
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    pointerEvents: 'none',
    transform: transform,
    WebkitTransform: transform
  };
}

class MatchDragLayer extends Component {
  static propTypes = {
    item: React.PropTypes.object,
    itemType: React.PropTypes.string,
    currentOffset: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number
    }),
    isDragging: React.PropTypes.bool
  };

  render() {
    return (
      <div style={getItemStyles(this.props)}>
      </div>
    );
  }
}

export default DragLayer(collect) (MatchDragLayer);
