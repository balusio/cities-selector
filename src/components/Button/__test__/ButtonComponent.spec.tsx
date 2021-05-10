import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Button } from '@material-ui/core';
import ButtonComponent from '../ButtonComponent';

configure({ adapter: new Adapter() });

describe('Render a button', () => {
  it('should render a simple span with the tile if no option for icon is passed', () => {
    const wrapper = mount(
      <ButtonComponent />,
    );
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.text()).toEqual('Simple ui button');
  });
});
