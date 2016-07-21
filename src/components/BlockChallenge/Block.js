/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import ItemTypes from '../ItemTypes';
import 'utils/prettifyHelper.js';
import $ from 'jquery';

const blockSource = {
  beginDrag(props) {
    return {
      index: props.index,
      block: props.block
    };
  }
};

const blockTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveBlock(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

class Block extends Component {

  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    moveBlock: PropTypes.func.isRequired,
    block: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context)
  }

  escape(code) {
    return code.replace('&gt;', '>').replace('&lt;', '<');
  }

  render() {
    const { connectDragSource, connectDropTarget, block } = this.props;
    var t =  $.parseHTML(prettyPrintOne(block.text), false);
    var spans = t.map((item, i) => {
      return <span key={i} className={item.className}>{this.escape(item.innerHTML)}</span>
    });
    return connectDragSource(connectDropTarget(
        <pre id={block.id} {...this.props} className="prettyprint btn code"><code className="prettyprint lang-java">{spans}</code></pre>));
  }
}

Block = DropTarget(ItemTypes.BLOCK, blockTarget, connect => ({connectDropTarget: connect.dropTarget()})) (Block);
export default DragSource(ItemTypes.BLOCK, blockSource, (connect, monitor) => ({ connectDragSource: connect.dragSource(), isDragging: monitor.isDragging()})) (Block);
