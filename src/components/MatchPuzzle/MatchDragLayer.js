/**
 * Created by lewa on 20/07/2016.
 */
'use strict';
import React, {Component} from 'react';
import {DragLayer} from 'react-dnd';
import Matchstick from './Matchstick';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: -35,
  width: '0%'
};

function getItemStyles(props) {
  const {currentOffset} = props;
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const {x, y} = currentOffset;
  const transform = `translate(${x}px, ${y}px) scale(1.5)`;
  return {
    transform: transform,
    WebkitTransform: transform
  };
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging(),
    initialOffset: monitor.getInitialClientOffset()
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

  renderItem() {
    return (
      <Matchstick connectDragSource="" connectDragPreview="" isDragging="" type='match' pos={[]}/>
    )
  }

  render() {

    if (!this.props.isDragging) {
      return (<div style={getItemStyles(this.props)}>
      </div>);
    }
    return (
      <div style={layerStyles}>
        <div style={getItemStyles(this.props)}>
          {this.renderItem()}
        </div>
      </div>
    );
  }
}

export default DragLayer(collect)(MatchDragLayer);
