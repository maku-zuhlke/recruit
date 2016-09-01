/**
 * Created by lewa on 01/09/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import TestUtils from 'react-addons-test-utils';
import DetailsForm from 'components/DetailsForm';
import React from 'react';

describe('DetailsFormShallowComponent', () => {
  let DetailsFormComponent;

  beforeEach(() => {
    DetailsFormComponent = createComponent(DetailsForm);
  });

  it('should be div', () => {
    expect(DetailsFormComponent.type).toEqual('div');
  });
});

describe('DetailsFormClass', () => {
  let detailsForm;

  beforeEach(() => {
    detailsForm = TestUtils.renderIntoDocument(
      <DetailsForm />
    );
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(detailsForm)).toBe(true);
  });

  it('should have state', () => {
    expect(detailsForm.state).toExist();
  });

  it('should update state - name', () => {
    expect(detailsForm.state.name).toEqual("");
    var event = {target: {id: "name", value: "John Smith"}};
    detailsForm.handleChange(event);
    expect(detailsForm.state.name).toEqual(event.target.value);
  });

  it('should update state - email', () => {
    expect(detailsForm.state.email).toEqual("");
    var event = {target: {id: "email", value: "john@smith.com"}};
    detailsForm.handleChange(event);
    expect(detailsForm.state.email).toEqual(event.target.value);
  });

  it('should update state - university', () => {
    expect(detailsForm.state.university).toEqual("");
    var event = {target: {id: "university", value: "UCL"}};
    detailsForm.handleChange(event);
    expect(detailsForm.state.university).toEqual(event.target.value);
  });

  it('should update state - graduation', () => {
    expect(detailsForm.state.graduation).toEqual("");
    var event = {target: {id: "graduation", value: "2016"}};
    detailsForm.handleChange(event);
    expect(detailsForm.state.graduation).toEqual(event.target.value);
  });
});
