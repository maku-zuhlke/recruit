/**
 * Created by lewa on 27/06/2016.
 */
import { BLOCKS_CHECK_SOLUTION, BLOCKS_MOVE_CODE, BLOCKS_TIMES_UP } from '../actions/const';
import { randomChallenge } from '../utils/randomChallenge';
import * as problems from '../data/scratchyProblems';
import update from 'react/lib/update';

export default function blocks(state = randomChallenge(problems), action) {
  switch (action.type) {
    case BLOCKS_CHECK_SOLUTION:
      return withNumberOfItemsInWrongPosition(state);
    case BLOCKS_MOVE_CODE:
      return withRearrangedBlocks(state, action.dragIndex, action.hoverIndex);
    case BLOCKS_TIMES_UP:
      return withTimesUp(state);
    default:
      return state;
  }
}

const withNumberOfItemsInWrongPosition = (state) => {
  return {
    ...state,
    attempt: true,
    numberOfItemsInWrongPosition: state.blocks.filter((item, i) => {
      return !isItemInCorrectPosition(item, state.correctOrder[i]);
    }).length
  }
};

const isItemInCorrectPosition  = (item, correctPosition) => item.id === correctPosition;

const withRearrangedBlocks = (state, dragIndex, hoverIndex) => {
  return {
    ...state,
    attempt: false,
    blocks: changeBlockPosition(state.blocks, dragIndex, hoverIndex)
  }
};

const changeBlockPosition = (blocks, dragIndex, hoverIndex) => {
  const dragBlock = blocks[dragIndex];
  return update(blocks, {
    $splice: [
      [dragIndex, 1],
      [hoverIndex, 0, dragBlock]
    ]
  })
};

const withTimesUp = (state) => {
  return  {
    ...state,
    attempt: false,
    end: true
  }
};
