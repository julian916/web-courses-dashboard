import React from "react";
import { shallow } from 'enzyme';
import Stars from "./Stars";

describe('<Stars />', () => {
  it('should render component without stars styled', () => {
    const STARS_AMOUNT = 0;
    const wrapper = shallow(<Stars stars={STARS_AMOUNT}/>);

    const amountOfRenderedStars = wrapper.find('.starred').length;
    
    expect(amountOfRenderedStars).toBe(STARS_AMOUNT);
  });
  it('should render component with stars styled', () => {
    const STARS_AMOUNT = 3;
    const wrapper = shallow(<Stars stars={STARS_AMOUNT}/>);

    const amountOfRenderedStars = wrapper.find('.starred').length;

    expect(amountOfRenderedStars).toBe(STARS_AMOUNT);
  });
});
