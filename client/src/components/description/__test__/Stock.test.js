import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Stock from '../Stock';


enzyme.configure({ adapter: new Adapter() });

describe('<Stock />', () => {
  const component = enzyme.shallow(<Stock renderInventory='<div id="inStock" className="colorGreen size-medium"> In Stock. </div>' />);
  it('renders 1 <Stock /> component', () => {
    expect(component).toHaveLength(1);
  });
});
