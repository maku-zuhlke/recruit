/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import Main from 'components/Main';
import React from 'react';

describe('MainComponent', () => {
  let MainComponent;
  beforeEach(() => {
    MainComponent = createComponent(Main.DecoratedComponent);
  });

  it('should have its component named as default className', () => {
    expect(MainComponent.props.className).toEqual('index');
  });
});



