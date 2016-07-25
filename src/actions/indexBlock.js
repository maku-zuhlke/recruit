/**
 * Created by lewa on 27/06/2016.
 */
import * as types from './const';

export function verifyOrder() {
  return { type: types.VERIFY }
}

export function sort(dragIndex, hoverIndex) {
  return { type: types.SORT, dragIndex, hoverIndex }
}
