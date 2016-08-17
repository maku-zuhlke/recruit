/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import reducer from '../../src/reducers/blocks';
import * as types from 'actions/const';

describe('blocksReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      instruction: 'Reorder the blocks to fix the code!',
      correctOrder: [2, 1],
      blocks: [
        { text: 'pieceOfCode1', id: 1},
        { text: 'pieceOfCode2', id: 2}]
    };
  });

  it('should return defined state', () => {
    expect(reducer(undefined, {})).toExist();
  });

  it('should return initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle BLOCKS_CHECK_SOLUTION - no change in state', () => {
    var newState = {
      ...initialState,
      numberOfItemsInWrongPosition: 2,
      attempt: true
    };
    expect(reducer(initialState, {type: types.BLOCKS_CHECK_SOLUTION})).toEqual(newState);
  });

  it('should handle BLOCKS_CHECK_SOLUTION - change in state', () => {
    var reorderedBlocksState = {
      ...initialState,
      blocks: [
        {text: 'pieceOfCode2', id: 2},
        {text: 'pieceOfCode1', id: 1}
      ]
    };
    var newState = reducer(reorderedBlocksState, {type: types.BLOCKS_CHECK_SOLUTION});
    expect(newState.numberOfItemsInWrongPosition).toEqual(0);
    expect(newState.attempt).toBe(true);
  });

  it('should handle BLOCKS_MOVE_CODE - no drag', () => {
    var blocks = initialState.blocks.slice(0);
    const dragIndex = 0;
    const hoverIndex = dragIndex;
    var newBlocks = reducer(initialState, {
      type: types.BLOCKS_MOVE_CODE,
      payload: {
        dragIndex,
        hoverIndex }
    }).blocks;
    expect(newBlocks).toEqual(blocks);
  });

  it('should handle BLOCKS_MOVE_CODE - drag', () => {
    var blocks = initialState.blocks.slice(0);
    const dragIndex = 0;
    const hoverIndex = 1;
    var newBlocks = reducer(initialState, {
      type: types.BLOCKS_MOVE_CODE,
      payload: {
        dragIndex,
        hoverIndex
      }
    }).blocks;
    expect(newBlocks).toNotEqual(blocks);
  });

  it('should handle BLOCKS_TIMES_UP - change end attribute', () => {
    expect(initialState.blocks.end).toBe(undefined);
    var newState = reducer(initialState, {type: types.BLOCKS_TIMES_UP});
    expect(newState.end).toBe(true);
    expect(newState.attempt).toBe(false);
  });
});
