import React from 'react';
import { mount } from 'enzyme';
import LanguageFilter from "./LanguageFilter";
import FlagButton from "./FlagButton";
import { LanguageEnum } from "../../../types/course";

describe('<LanguageFilter />', () => {
  const onChange = jest.fn();
  const wrapper = mount(<LanguageFilter onChange={onChange} />);

  it('should render correctly initial state', () => {
    expect(wrapper).toMatchSnapshot();

    const buttons = wrapper.find(FlagButton);
    buttons.forEach(button => {
      expect(button.props().active).toBe(false);
    });
  });

  it('should show active first FlagButton after click', () => {
    const firstButton = wrapper.find(FlagButton).at(0);
    firstButton.simulate('click');
    wrapper.update();

    // Validate to have active only in clicked button
    expect(wrapper.find(FlagButton).at(0).props().active).toBe(true);
    expect(wrapper.find(FlagButton).at(1).props().active).toBe(false);

    // Validate that onChange was called with key value of enum
    expect(onChange).toHaveBeenCalledWith(LanguageEnum[firstButton.props().lang]);
  });

});
