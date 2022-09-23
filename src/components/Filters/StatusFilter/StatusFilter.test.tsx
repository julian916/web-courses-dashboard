import React from 'react';
import { shallow } from 'enzyme';
import StatusFilter from "./StatusFilter";
import { StatusEnum } from "../../../types/course";

describe('<StatusFilter />', () => {
  const onChange = jest.fn();

  it('should render status filter with All selected', () => {
    const component = (
      <StatusFilter onChange={onChange} statusFilter={null}/>
    );
    const wrapper = shallow(component);

    expect(wrapper.find('#all').props().active).toBe(true);
    expect(wrapper.find('#active').props().active).toBe(false);
    expect(wrapper.find('#completed').props().active).toBe(false);
  });

  it('should render status filter with Active selected', () => {
    const component = (
      <StatusFilter onChange={onChange} statusFilter={StatusEnum.ACTIVE}/>
    );
    const wrapper = shallow(component);

    expect(wrapper.find('#all').props().active).toBe(false);
    expect(wrapper.find('#active').props().active).toBe(true);
    expect(wrapper.find('#completed').props().active).toBe(false);
  });

  it('should render status filter with Completed selected', () => {
    const component = (
      <StatusFilter onChange={onChange} statusFilter={StatusEnum.COMPLETED}/>
    );
    const wrapper = shallow(component);

    expect(wrapper.find('#all').props().active).toBe(false);
    expect(wrapper.find('#active').props().active).toBe(false);
    expect(wrapper.find('#completed').props().active).toBe(true);
  });

});
