/**
 * Created by lewa on 03/08/2016.
 */
'use strict';
import * as codingProblems from '../data/scratchyProblems';
import * as matchesProblems from '../data/matchstickProblems';

var coding = isInLocalStorage("coding") ? JSON.parse(localStorage.getItem("coding")) : {...codingProblems};
var matches = isInLocalStorage("matches") ?  JSON.parse(localStorage.getItem("matches")) : {...matchesProblems};

export function randomChallenge(challenge) {
  var problems;
  if (challenge == 1) {
    problems = coding;
  } else {
    problems = matches;
  }
  var keys = Object.keys(problems);
  var selected = keys[keys.length * Math.random() << 0];
  var selectedChallenge = problems[selected];
  delete problems[selected];
  if (challenge == 1) {
    localStorage.setItem("coding", JSON.stringify(problems));
  } else {
    localStorage.setItem("matches", JSON.stringify(problems));
  }
  return selectedChallenge;
}

function isInLocalStorage(challenge){
  return localStorage.getItem(challenge) != null && localStorage.getItem(challenge) != "{}"
};
