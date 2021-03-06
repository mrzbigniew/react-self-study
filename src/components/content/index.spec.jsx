import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Content from './index';

describe('Content', () => {
  it('renders', () => {
    const component = renderer.create(<Content><span>Some content content</span></Content>).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe('wrapper', () => {
    it('renders element with content-expand class name', () => {
      const wrapper = shallow(<Content><span></span></Content>);

      expect(wrapper.hasClass('content-expand')).toBeTruthy();
    });

    it('renders childrens', () => {
      const exceptedContent = 'test content';
      const wrapper = shallow(<Content>{exceptedContent}</Content>);

      expect(wrapper.text()).toEqual(exceptedContent);
    });
  });
});
