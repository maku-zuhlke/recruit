/**
 * Created by lewa on 27/06/2016.
 */
import * as types from './const';

export function verifyCodeOrder() {
  return { type: types.VERIFY_CODE_ORDER }
}

export function sort(dragIndex, hoverIndex) {
  return { type: types.SORT, dragIndex, hoverIndex }
}
