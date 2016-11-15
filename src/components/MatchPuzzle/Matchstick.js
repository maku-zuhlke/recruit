/**
 * Created by lewa on 19/07/2016.
 */
import React, {Component, PropTypes} from 'react';
import {DragSource} from 'react-dnd';
import ItemTypes from '../ItemTypes';

const matchSource = {
  beginDrag(props) {
    return {
      pos: props.pos
    }
  }
};

class Matchstick extends Component {
  constructor() {
    super();
    this.state = {currentStyle: {}}
  }

  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    pos: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
  };

  onSelectStyle() {
    this.setState
    (
      {
        currentStyle: {
          transform: 'scale(1.5)'
        }
      }
    );
  }


  onDeSelectStyle() {
    this.setState
    (
      {
        currentStyle: {
          transform: 'scale(1)'
        }
      }
    );
  }

  render() {
    const {isDragging, connectDragSource} = this.props;
    const opacity = isDragging ? 0.4 : 1;
    const cursor = 'move';
    return connectDragSource(
      <div style={this.state.currentStyle}
           onMouseDown={this.onSelectStyle.bind(this)}
           onMouseUp={this.onDeSelectStyle.bind(this)}
           onTouchStart={this.onSelectStyle.bind(this)}
           onTouchEnd={this.onDeSelectStyle.bind(this)}
           onMouseMove={this.onDeSelectStyle.bind(this)}
           onTouchMove={this.onDeSelectStyle.bind(this)}
           >
        <img style={{cursor, opacity}} src="images/match_out.png" draggable="true"/>
      </div>
    );
  }
}

export
default

DragSource(ItemTypes

    .MATCH
  ,
  matchSource
  , (connect
    ,
     monitor) => ( {
    connectDragSource: connect.dragSource
    (),
    isDragging: monitor.isDragging
    ()
  }
  ))
(Matchstick);
