import React from "react";
import { shallow } from 'enzyme';
import Level from "./Level";
import { LevelEnum } from "../../types/course";

describe('<Level />', () => {
  it('should render beginner level', () => {
    const wrapper = shallow(<Level level={LevelEnum.BEGINNER} />);

    expect(wrapper.find('#beginner')).toHaveLength(1);
  });

  it('should render intermediate level',  () => {
    const wrapper = shallow(<Level level={LevelEnum.INTERMEDIATE} />);

    expect(wrapper.find('#intermediate')).toHaveLength(1);
  });
  
  it('should render advanced level',  () => {
    const wrapper = shallow(<Level level={LevelEnum.ADVANCED} />);

    expect(wrapper.find('#advanced')).toHaveLength(1);
  });
  
  it('should render advanced level',  () => {
    const wrapper = shallow(<Level level={LevelEnum.ALL} />);

    expect(wrapper.find('#all')).toHaveLength(1);
  });
});
