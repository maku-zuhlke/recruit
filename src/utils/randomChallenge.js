/**
 * Created by lewa on 03/08/2016.
 */
import { MATCHES, CODING } from '../data/strings';
import * as matchesProblems from '../data/matchstickProblems';
import * as codingProblems from '../data/scratchyProblems';

export function randomChallenge(challenge) {
  var problems;
  if (challenge == CODING) {
    problems = isInLocalStorage(challenge) ?  JSON.parse(localStorage.getItem(challenge)) : {...codingProblems};
  } else if (challenge == MATCHES) {
    problems = isInLocalStorage(challenge) ?  JSON.parse(localStorage.getItem(challenge)) : {...matchesProblems};
  }
  var keys = Object.keys(problems);
  var selected = keys[keys.length * Math.random() << 0];
  var selectedChallenge = problems[selected];
  delete problems[selected];
  localStorage.setItem(challenge, JSON.stringify(problems));
  // Unique ID is given so that when a challenge is restarted, the timer is assigned a new    and consequently re-rendered
  return {...selectedChallenge};
}

function isInLocalStorage(challenge){
  return localStorage.getItem(challenge) != null && localStorage.getItem(challenge) != "{}"
}
