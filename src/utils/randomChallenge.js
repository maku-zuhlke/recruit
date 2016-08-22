/**
 * Created by lewa on 03/08/2016.
 */

export function randomChallenge(problems) {
  var keys = Object.keys(problems);
  return problems[keys[keys.length * Math.random() << 0]];
}
