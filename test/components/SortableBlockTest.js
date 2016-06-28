/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import SortableBlock from 'components/SortableBlock';

describe('SortableBlockShallowComponent', () => {
  let SortableBlockComponent;

  beforeEach(() => {
    SortableBlockComponent = createComponent(SortableBlock, {item: {}});
  });

  it('should be div', () => {
    expect(SortableBlockComponent.type).toEqual('div');
  });
});
