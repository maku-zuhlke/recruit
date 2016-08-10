/**
 * Created by lewa on 10/08/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import Menu from 'components/Menu';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { codingChallengeButton, puzzleChallengeButton } from 'data/strings';

describe('Menu', () => {
  it('should be div', () => {
    let MenuComponent = createComponent(Menu);
    expect(MenuComponent.type).toEqual('div');
  });

  it('should have challenge selection buttons', () => {
    let menu = TestUtils.renderIntoDocument(<Menu/>);
    var menuComponent = ReactDOM.findDOMNode(menu);
    expect(menuComponent.innerText.includes(codingChallengeButton)).toBe(true);
    expect(menuComponent.innerText.includes(puzzleChallengeButton)).toBe(true);
  });
});

