import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { List, ListItem, TextField } from '@material-ui/core';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import { act } from 'react-test-renderer';

import CitiesList from '../CitiesList';

configure({ adapter: new Adapter() });

const mockedCities = [{
  geonameid: 1234,
  name: 'Caracas',
  country: 'Venezuela',
  subcountry: 'DistritoCapital',
},
{
  geonameid: 5678,
  name: 'Buenos Aires',
  country: 'Argentina',
  subcountry: 'Ciudad Autónoma de Buenos Aires',
}];

describe('CitiesList functionality', () => {
  it('should be loaded', () => {
    const wrapper = mount(<CitiesList cities={mockedCities} />);

    expect(wrapper.find(List)).toHaveLength(1);
    expect(wrapper.find(ListItem)).toHaveLength(2);
  });
});
