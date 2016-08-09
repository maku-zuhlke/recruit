/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import { isFSA } from 'flux-standard-action';
import * as blockActions from 'actions/indexBlock';
import * as matchesActions from 'actions/indexMatches';
import * as types from 'actions/const';

describe('blockActions', () => {
  it('should create an action to check the order of blocks', () => {
    const expectedAction = {
      type: types.BLOCKS_CHECK_SOLUTION
    };
    expect(blockActions.checkSolution()).toEqual(expectedAction);
    expect(isFSA(blockActions.checkSolution())).toEqual(true);
  });

  it('should create an action to move block of code', () => {
    const dragIndex = 0;
    const hoverIndex = 1;
    const expectedAction = {
      type: types.BLOCKS_MOVE_CODE,
      payload: {
        dragIndex,
        hoverIndex
      }
    };
    expect(blockActions.moveCodeBlock(dragIndex, hoverIndex)).toEqual(expectedAction);
    expect(isFSA(blockActions.moveCodeBlock(dragIndex, hoverIndex))).toEqual(true);
  });

  it('should create an action to change the timesup attribute inside blocks', () => {
    const expectedAction = {
      type: types.BLOCKS_TIMES_UP
    };
    expect(blockActions.timeIsUp()).toEqual(expectedAction);
    expect(isFSA(blockActions.timeIsUp())).toEqual(true);
  });
});

describe('matchesActions', () => {
  it('should create an action to remove match', () => {
    const before = [0, 0];
    const expectedAction = {
      type: types.MATCHES_REMOVE_MATCH,
      payload: {
        before
      }
    };
    expect(matchesActions.removeMatch(before)).toEqual(expectedAction);
    expect(isFSA(matchesActions.removeMatch(before))).toEqual(true);
  });

  it('should create an action to place match', () => {
    const after = [1, 2];
    const expectedAction = {
      type: types.MATCHES_PLACE_MATCH,
      payload: {
        after
      }
    };
    expect(matchesActions.placeMatch(after)).toEqual(expectedAction);
    expect(isFSA(matchesActions.placeMatch(after))).toEqual(true);
  });

  it('should create an action to check matches positions', () => {
    const expectedAction = {
      type: types.MATCHES_CHECK_POSITIONS
    };
    expect(matchesActions.checkMatchesPositions()).toEqual(expectedAction);
    expect(isFSA(matchesActions.checkMatchesPositions())).toEqual(true);
  });

  it('should create an action to change the timesup attribute inside matches', () => {
    const expectedAction = {
      type: types.MATCHES_TIMES_UP
    };
    expect(matchesActions.timeIsUp()).toEqual(expectedAction);
    expect(isFSA(matchesActions.timeIsUp())).toEqual(true);
  });
});
