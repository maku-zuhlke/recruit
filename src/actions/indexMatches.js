/**
 * Created by lewa on 22/07/2016.
 */
import * as types from './const';

export function removeMatch(before) {
  return { type: types.REMOVE, before }
}

export  function placeMatch(after) {
  return { type: types.PLACE, after }
}

export function checkMatches() {
  return { type: types.CHECK }
}
