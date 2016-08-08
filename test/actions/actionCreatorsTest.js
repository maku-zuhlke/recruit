/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import * as blockActions from 'actions/indexBlock';
import * as matchesActions from 'actions/indexMatches';
import * as types from 'actions/const';

describe('blockActions', () => {
  it('should create an action to check the order of blocks', () => {
    const expectedAction = {
      type: types.BLOCKS_CHECK_SOLUTION
    };
    expect(blockActions.checkSolution()).toEqual(expectedAction)
  });

  it('should create an action to move block of code', () => {
    const dragIndex = 0;
    const hoverIndex = 1;
    const expectedAction = {
      type: types.BLOCKS_MOVE_CODE,
      dragIndex,
      hoverIndex
    };
    expect(blockActions.moveCodeBlock(dragIndex, hoverIndex)).toEqual(expectedAction)
  });

  it('should create an action to change the timesup attribute inside blocks', () => {
    const expectedAction = {
      type: types.BLOCKS_TIMES_UP
    };
    expect(blockActions.timeIsUp()).toEqual(expectedAction)
  });
});

describe('matchesActions', () => {
  it('should create an action to remove match', () => {
    const before = [0, 0];
    const expectedAction = {
      type: types.MATCHES_REMOVE_MATCH,
      before
    };
    expect(matchesActions.removeMatch(before)).toEqual(expectedAction);
  });

  it('should create an action to place match', () => {
    const after = [1, 2];
    const expectedAction = {
      type: types.MATCHES_PLACE_MATCH,
      after
    };
    expect(matchesActions.placeMatch(after)).toEqual(expectedAction);
  });

  it('should create an action to check matches positions', () => {
    const expectedAction = {
      type: types.MATCHES_CHECK_POSITIONS
    };
    expect(matchesActions.checkMatchesPositions()).toEqual(expectedAction);
  });
});
