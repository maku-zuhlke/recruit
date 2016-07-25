/**
 * Created by lewa on 25/07/2016.
 */
'use strict';
import expect from 'expect';
import reducer from '../../src/reducers/matches';
import * as types from 'actions/const';

describe('matchesReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      numbers :[[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,1,1,1,0,0,0]],
      operation: [1,0,0],
      moves: 1,
      correctPositions: {numbers: [[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]], operation:[1,1,0]},
      win: false
    };
  });

  it('should return defined state', () => {
    expect(reducer(undefined, {})).toExist();
  });

  it('should return initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle CHECK - decreasing number of moves', () => {
    expect(initialState.moves).toEqual(1);
    expect(reducer(initialState, {type: types.CHECK}).moves).toEqual(0);
  });

  it('should handle CHECK - win', () => {
    expect(initialState.win).toEqual(false);
    const before = [2, 1];
    reducer(initialState, {type: types.REMOVE, before});
    const after = [3, 1];
    reducer(initialState, {type: types.PLACE, after});
    expect(reducer(initialState, {type: types.CHECK}).win).toEqual(true);
  });

  it('should handle REMOVE - removing from number', () => {
    const before = [1, 2];
    expect(reducer(initialState, {type: types.REMOVE, before}).numbers[before[0]]).toEqual([0,0,0,1,0,0,0]);
  });

  it('should handle REMOVE - removing from operation', () => {
    const before = [3, 0];
    expect(reducer(initialState, {type: types.REMOVE, before}).operation).toEqual([0,0,0]);
  });

  it('should handle PLACE - placing in number', () => {
    const after = [1, 6];
    expect(reducer(initialState, {type: types.PLACE, after}).numbers[after[0]]).toEqual([0,0,1,1,0,0,1]);
  });

  it('should handle PLACE - placing in operation', () => {
    const after = [3, 2];
    expect(reducer(initialState, {type: types.PLACE, after}).operation).toEqual([1,0,1]);
  });
});
