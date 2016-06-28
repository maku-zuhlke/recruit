/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import createComponent from 'helpers/shallowRenderHelper';
import Win from 'components/Win';

describe('WinShallowComponent', () => {
  let WinComponent;

  beforeEach(() => {
    WinComponent = createComponent(Win);
  });

  it('should be div', () => {
    expect(WinComponent.type).to.equal('div');
  });
});
