/**
 * Created by lewa on 20/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../ItemTypes';
import Matchstick from "./Matchstick";

const matchTarget = {
  drop(props, monitor) {
    console.log("DROOOOOOOOP")
    if (props.match.hidden) {
      props.match = monitor.getItem();
      console.log("!!!!!!!!!!", monitor.getItem())
      props.onDrop(monitor.getItem());
    }
  }
};

class MatchPlaceholder extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    onDrop: PropTypes.func,
    classes: PropTypes.string.isRequired,
    match: PropTypes.object
  };

  render() {
    const { isOver, connectDropTarget, classes, match } = this.props;
    var result = <img src="images/match_out.png" className="placeholder"/>;
    if (!match.hidden) {
      result = <Matchstick name={2}/>
    }
    return connectDropTarget(<div className={classes}>
      <div className="match">{result}</div></div>)
        }
}

export default DropTarget(ItemTypes.MATCH, matchTarget, (connect, monitor) => ({ connectDropTarget: connect.dropTarget(), isOver: monitor.isOver() })) (MatchPlaceholder);
