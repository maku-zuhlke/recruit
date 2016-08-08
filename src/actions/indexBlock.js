/**
 * Created by lewa on 27/06/2016.
 */
import * as types from './const';

export const checkSolution = () => ({
  type: types.BLOCKS_CHECK_SOLUTION
});

export const moveCodeBlock = (dragIndex, hoverIndex) => ({
  type: types.BLOCKS_MOVE_CODE,
  payload: {
    dragIndex,
    hoverIndex
  }
});

export const timeIsUp = () => ({
  type: types.BLOCKS_TIMES_UP
});
