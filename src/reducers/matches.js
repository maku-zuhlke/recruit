/**
 * Created by lewa on 21/07/2016.
 */
const initialState = {
  numbers :[[1,1,0,1,1,0,1],[0,1,1,0,1,1,1],[0,1,1,1,1,1,1]],
  operation: [1,0,0],
  correctPositions: {numbers: [[0,1,1,1,1,0,1],[0,1,1,1,1,0,1],[0,1,0,1,1,1,1]], operation:[1,0,0]}
};

export default function matches(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
