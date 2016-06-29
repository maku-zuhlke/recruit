/**
 * Created by lewa on 29/06/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import WrongAnswer from 'components/WrongAnswer'

describe('WrongAnswerShallowComponent', () => {
  let WrongAnswerComponent;

  beforeEach(() => {
    WrongAnswerComponent = createComponent(WrongAnswer);
  });

  it('should be div', () => {
    expect(WrongAnswerComponent.type).toEqual('div');
  });
});
