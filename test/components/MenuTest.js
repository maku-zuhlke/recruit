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

describe('MenuComponent', () => {
  it('should be div', () => {
    let MenuComponent = createComponent(Menu);
    expect(MenuComponent.type).toEqual('div');
  });

  it('should have challenge selection links', () => {
    let menu = TestUtils.renderIntoDocument(<Menu/>);
    let links = TestUtils.scryRenderedDOMComponentsWithTag(menu, 'span');
    expect(ReactDOM.findDOMNode(links[0]).textContent).toBe(codingChallengeButton);
    expect(ReactDOM.findDOMNode(links[1]).textContent).toBe(puzzleChallengeButton);
  });
});

