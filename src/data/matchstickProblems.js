/**
 * Created by lewa on 03/08/2016.
 */

export const m1 = {
  numbers :[[1,1,0,1,1,0,1],[0,1,1,0,1,1,1],[1,1,1,1,1,1,1]],
  operation: [1,0,0],
  moves: 2,
  correctPositions: {numbers: [[1,1,1,1,1,0,1],[0,1,1,1,1,0,1],[1,1,0,1,1,1,1]], operation: [1,0,0]},
  win: false
};

export const m2 = {
  numbers :[[0,1,1,1,1,0,1],[0,1,1,0,1,1,1],[1,1,1,1,1,0,1]],
  operation: [1,0,0],
  moves: 2,
  correctPositions: {numbers: [[0,1,1,1,1,0,1],[0,1,1,1,1,0,1],[1,1,1,1,1,1,0]], operation: [1,0,0]},
  win: false
};

export const m3 = {
  numbers :[[1,1,0,1,1,1,1],[1,1,0,1,1,1,1],[1,1,1,1,1,1,1]],
  operation: [1,0,0],
  moves: 1,
  correctPositions: {numbers: [[1,1,0,1,1,1,1],[1,1,0,1,1,1,1],[1,1,0,1,1,1,1]], operation: [1,1,0]},
  win: false
};

export const m4 = {
  numbers :[[1,1,0,1,1,1,1],[1,0,1,1,0,0,1],[1,0,1,1,0,0,1]],
  operation: [1,0,1],
  moves: 1,
  correctPositions: {numbers: [[1,1,1,1,1,1,1],[1,0,1,1,0,0,1],[1,0,1,1,0,0,1]], operation: [1,0,0]},
  win: false
};

export const m5 = {
  numbers :[[0,1,1,1,0,0,0],[0,0,1,1,0,0,0],[1,1,1,1,1,1,1]],
  operation: [1,0,0],
  moves: 1,
  correctPositions: {numbers: [[0,1,1,1,0,0,0],[0,1,1,1,0,0,0],[1,1,1,1,1,1,0]], operation: [1,0,0]},
  win: false
};

export const m6 = {
  numbers :[[0,0,1,1,0,0,0],[1,1,0,1,1,1,1],[1,1,0,1,1,0,1]],
  operation: [1,0,1],
  moves: 1,
  correctPositions: {numbers: [[0,0,1,1,0,0,0],[1,1,0,1,1,0,1],[1,1,0,1,1,1,1]], operation: [1,0,1]},
  win: false
};

export const m7 = {
  numbers :[[1,1,1,1,1,1,0],[1,1,1,1,1,1,0],[1,1,1,1,1,1,1]],
  operation: [1,0,0],
  moves: 2,
  correctPositions: {numbers: [[1,1,1,1,1,0,1],[1,1,1,1,1,1,0],[1,1,1,1,1,0,1]], operation: [1,0,1]},
  win: false
};
