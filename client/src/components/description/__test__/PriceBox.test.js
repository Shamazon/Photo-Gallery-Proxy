import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PriceBox from '../PriceBox';


enzyme.configure({ adapter: new Adapter() });

describe('<PriceBox />', () => {
  const component = enzyme.shallow(<PriceBox stringPrice="19.33" />);
  it('renders 1 <PriceBox /> component', () => {
    expect(component).toHaveLength(1);
  });
});
