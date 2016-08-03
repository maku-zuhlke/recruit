/**
 * Created by lewa on 27/06/2016.
 */
import * as types from './const';

export function verifyCodeOrder() {
  return { type: types.VERIFY_CODE_ORDER }
}

export function repositionCodeBlocks(dragIndex, hoverIndex) {
  return { type: types.REPOSITION_CODE_BLOCKS, dragIndex, hoverIndex }
}
