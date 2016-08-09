/**
 * Created by lewa on 20/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../ItemTypes';
import Matchstick from "./Matchstick";

const matchTarget = {
  drop(props, monitor) {
    if (props.match.hidden) {
      props.onDrop(monitor.getItem(), props.pos);
    }
  }
};

class MatchPlaceholder extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    onDrop: PropTypes.func,
    classes: PropTypes.string.isRequired,
    match: PropTypes.object,
    pos: PropTypes.array.isRequired
  };

  render() {
    const { isOver, connectDropTarget, classes, match } = this.props;
    var result = <img src="images/match_out.png" className="placeholder"/>;
    if (!match.hidden) {
      result = <Matchstick pos={match.pos}/>
    }
    return connectDropTarget(<div className={classes}>
      <div className="match">{result}</div></div>)
        }
}

export default DropTarget(ItemTypes.MATCH, matchTarget, (connect, monitor) => ({ connectDropTarget: connect.dropTarget(), isOver: monitor.isOver() })) (MatchPlaceholder);
