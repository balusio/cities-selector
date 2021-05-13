import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TextField } from '@material-ui/core';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import { act } from 'react-test-renderer';

import SearchBar from '../SearchBar';

configure({ adapter: new Adapter() });

describe('SearchBar functionality', () => {
  it('should be loaded', () => {
    const wrapper = mount(<SearchBar />);

    expect(wrapper.find(TextField)).toHaveLength(1);
  });

  it('should show the iconLoading on typing', () => {
    const wrapper = mount(<SearchBar />);
    expect(wrapper.find(LocationSearchingIcon).props().className?.includes('searchingAnimation')).toBeFalsy();
    wrapper.find('input').at(0).simulate('change', { target: { name: 'width', value: 50 } });
    wrapper.update();
    wrapper.find(TextField).update();
    expect(wrapper.find(LocationSearchingIcon).props().className?.includes('searchingAnimation')).toBeTruthy();
  });
});
