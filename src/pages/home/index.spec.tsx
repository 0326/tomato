import * as React from 'react';
import { shallow } from 'enzyme';

import App from './index';

describe('<App />', () => {
  it('renders the provided text', () => {
    const wrapper = shallow(<App name="Foo" />);
    expect(wrapper.find('h1').text()).toBe('Hello, Foo');
  });
});
