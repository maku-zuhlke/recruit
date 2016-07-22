/**
 * Created by lewa on 22/07/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import Fail from 'components/Fail';
import React from 'react';

describe('FailShallowComponent', () => {
  let FailComponent;

  beforeEach(() => {
    FailComponent = createComponent(Fail);
  });

  it('should be div', () => {
    expect(FailComponent.type).toEqual('div');
  });
});
