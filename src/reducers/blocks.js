/**
 * Created by lewa on 27/06/2016.
 */
import { VERIFY, SORT } from '../actions/const';
import * as problems from '../data/scratchyProblems';
import update from 'react/lib/update';

function randomChallenge() {
  var keys = Object.keys(problems);
  return problems[keys[keys.length * Math.random() << 0]]
}

export default function blocks(state = randomChallenge(), action) {
  switch (action.type) {
    case VERIFY:
      state.win = state.blocks.map((item, i) => {
        return item.id === state.correctOrder[i];
      }).reduce((current, next) => {
        return current && next;
      });
      return state;
    case SORT:
      const dragBlock = state.blocks[action.dragIndex];
      state.blocks = update(state.blocks, {
        $splice: [
          [action.dragIndex, 1],
          [action.hoverIndex, 0, dragBlock]
        ]
      });
      return state;
    default:
      return state;
  }
}
