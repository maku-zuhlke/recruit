/**
 * Created by lewa on 18/07/2016.
 */
'use strict';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import BlockDragLayer from 'components/BlockChallenge/BlockDragLayer';
import React, { Component } from 'react';

describe('BlockDragLayerShallowComponent', () => {
  it('should be div', () => {
    let BDLComponent = createComponent(BlockDragLayer.DecoratedComponent);
    expect(BDLComponent.type).toEqual('div');
  });
});

describe('BlockDragLayerClass', () => {
  let OriginalLayer;

  beforeEach(() => {
    OriginalLayer = BlockDragLayer.DecoratedComponent;
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
    let shape = {x: 0, y: 0};
    let layer = TestUtils.renderIntoDocument(<OriginalLayer currentOffset={shape}/>);
    let layerDiv = TestUtils.findRenderedDOMComponentWithTag(layer, 'div');
    expect(layerDiv.style.display).toEqual('');
    expect(layerDiv.style.pointerEvents).toEqual('none');
    expect(layerDiv.style.transform).toEqual('translate(0px, 0px)');
    expect(layerDiv.style.WebkitTransform).toEqual('translate(0px, 0px)');
  });
});
