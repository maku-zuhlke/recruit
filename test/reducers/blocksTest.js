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
      correctOrder: [2, 1],
      blocks: [
        {text: 'test1', id: 1},
        {text: 'test2', id: 2}],
      win: false
    };
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle VERIFY - no change in state', () => {
    expect(reducer(initialState, {type: types.VERIFY})).toEqual(initialState);
  });

  it('should handle VERIFY - change in state', () => {
    var reorderedBlocksState = initialState;
    reorderedBlocksState.blocks = [
      {text: 'test2', id: 2},
      {text: 'test1', id: 1}];
    var newState = reducer(reorderedBlocksState, {type: types.VERIFY});
    expect(newState.win).toBe(true);
  });
});
