import React from 'react';
import { mount } from 'enzyme';
import LanguageFilter from './LanguageFilter';
import FlagButton from './FlagButton';

const ES_LANGUAGE = 'EN';

describe('<LanguageFilter />', () => {
  it('should render correctly initial state', () => {
    const onChange = jest.fn();
    const wrapper = mount(<LanguageFilter onChange={onChange} />);

    expect(wrapper).toMatchSnapshot();

    const buttons = wrapper.find(FlagButton);
    buttons.forEach(button => {
      expect(button.props().active).toBe(false);
    });
  });

  it('should call onChange correctly', function () {
    const onChange = jest.fn();
    const wrapper = mount(<LanguageFilter onChange={onChange} />);
    
    wrapper.find('#EN').simulate('click');
    
    expect(onChange).toHaveBeenCalledWith({ language: ES_LANGUAGE });
  });

  it('should show active flag for lang=EN item', () => {
    const onChange = jest.fn();
    const wrapper = mount(<LanguageFilter onChange={onChange} language={ES_LANGUAGE} />);

    // Validate to have active only in clicked button
    expect(wrapper.find('#EN').props().active).toBe(true);
    expect(wrapper.find('#ES').props().active).toBe(false);
  });

});
