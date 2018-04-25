import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CustomerReviews from '../customerReviews';


enzyme.configure({ adapter: new Adapter() });

describe('<CustomerReviews />', () => {
  const component = enzyme.shallow(<CustomerReviews />);
  it('renders 1 <CustomerReviews /> component', () => {
    expect(component).toHaveLength(1);
  });
});
