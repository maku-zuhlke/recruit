/**
 * Created by lewa on 25/07/2016.
 */
'use strict';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import MatchDragLayer from 'components/MatchPuzzle/MatchDragLayer';
import React, { Component } from 'react';

describe('MatchDragLayerShallowComponent', () => {
  it('should be div', () => {
    let MDLComponent = createComponent(MatchDragLayer.DecoratedComponent);
    expect(MDLComponent.type).toEqual('div');
  });
});

describe('MatchkDragLayerClass', () => {
  let OriginalLayer;

  beforeEach(() => {
    OriginalLayer = MatchDragLayer.DecoratedComponent;
  });

  it('should be rendered', () => {
    let root = TestUtils.renderIntoDocument(
      <OriginalLayer />
    );
    expect(TestUtils.findRenderedDOMComponentWithTag(root, 'div')).toExist();
  });

  it('should render layer with display set to none', () => {
    let layer = TestUtils.renderIntoDocument(<OriginalLayer />);
    let layerDiv = TestUtils.findRenderedDOMComponentWithTag(layer, 'div');
    expect(layerDiv.style.display).toEqual('none');
  });

  it('should render layer with transformations', () => {
    let shape = {x: 0, y:0};
    let layer = TestUtils.renderIntoDocument(<OriginalLayer currentOffset={shape}/>);
    let layerDiv = TestUtils.findRenderedDOMComponentWithTag(layer, 'div');
    expect(layerDiv.style.display).toEqual('');
    expect(layerDiv.style.pointerEvents).toEqual('none');
    expect(layerDiv.style.transform).toEqual('translate(0px, 0px)');
    expect(layerDiv.style.WebkitTransform).toEqual('translate(0px, 0px)');
  });
});
