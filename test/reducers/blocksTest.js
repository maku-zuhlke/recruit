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
        { text: 'pieceOfCode2', id: 2}],
      win: false
    };
  });

  it('should return defined state', () => {
    expect(reducer(undefined, {})).toExist();
  });

  it('should return initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle VERIFY_CODE_ORDER - no change in state', () => {
    expect(reducer(initialState, {type: types.VERIFY_CODE_ORDER})).toEqual(initialState);
  });

  it('should handle VERIFY_CODE_ORDER - change in state', () => {
    var reorderedBlocksState = initialState;
    reorderedBlocksState.blocks = [
      {text: 'pieceOfCode2', id: 2},
      {text: 'pieceOfCode1', id: 1}];
    var newState = reducer(reorderedBlocksState, {type: types.VERIFY_CODE_ORDER});
    expect(newState.win).toBe(true);
  });

  it('should handle SORT - no drag', () => {
    const dragIndex = 0;
    const hoverIndex = dragIndex;
    var blocks = initialState.blocks;
    var newBlocks = reducer(initialState, {type: types.SORT, dragIndex, hoverIndex}).blocks;
    expect(newBlocks).toEqual(blocks);
  });

  it('should handle SORT - drag', () => {
    var blocks = initialState.blocks;
    const dragIndex = 0;
    const hoverIndex = 1;
    var newBlocks = reducer(initialState, {type: types.SORT, dragIndex, hoverIndex}).blocks;
    expect(newBlocks).toNotEqual(blocks);
  });
});
