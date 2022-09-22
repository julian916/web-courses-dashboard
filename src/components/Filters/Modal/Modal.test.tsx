import React from 'react';
import { mount } from 'enzyme';
import ModalWithInput from "./Modal";
import Form from "react-bootstrap/Form";

describe('<ModalWithInput />', () => {
  const onSubmit = jest.fn();
  const onCancel = jest.fn();
  const component = (
    <ModalWithInput
      isOpen={true}
      onSubmit={onSubmit}
      onClose={onCancel}
    />
  );
  const wrapper = mount(component);

  it('should render ModalWithInput', () => {

    expect(wrapper.debug()).toMatchSnapshot();
    expect(wrapper.find(Form.Control)).toHaveLength(1);
  });

  it('should send text value on submit', () => {
    const EXPECTED_INPUT = 'Course';
    wrapper.find('input').simulate('change', { target: { value: EXPECTED_INPUT } });
    wrapper.find('#submit button').simulate('click');

    expect(onSubmit).toHaveBeenCalledWith(EXPECTED_INPUT);
  });
});
