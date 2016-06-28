/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import Instruction from 'components/Instruction';

describe('InstructionShallowComponent', () => {
  let InstructionComponent;

  beforeEach(() => {
    InstructionComponent = createComponent(Instruction);
  });

  it('should be div', () => {
    expect(InstructionComponent.type).toEqual('div');
  });
});
