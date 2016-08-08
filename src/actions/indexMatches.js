/**
 * Created by lewa on 22/07/2016.
 */
import * as types from './const';

export const removeMatch = (before) => ({
  type: types.MATCHES_REMOVE_MATCH, before
});

export const placeMatch = (after) => ({
  type: types.MATCHES_PLACE_MATCH, after
});

export const checkMatchesPositions = () => ({
  type: types.MATCHES_CHECK_POSITIONS
});

export const timeIsUp = () => ({
  type: types.MATCHES_TIMES_UP
});
