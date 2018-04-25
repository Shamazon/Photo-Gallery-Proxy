import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ItemDescription from '../ItemDescription';


enzyme.configure({ adapter: new Adapter() });

// work in progress


// describe('<ItemDescription />', () => {
//   it('renders 1 <ItemDescription /> component', () => {
//     const component = enzyme.shallow(<ItemDescription />);
//     expect(component).toHaveLength(1);
//   });
// });

// describe('<ItemDescription />', () => {
//   const wrapper = enzyme.mount(
//     <ItemDescription cats={cats} />
//   );

//   it('renders child correctly', () => {
//       expect(wrapper.find('tbody').children()).to.have.length(cats.length);
//       expect(wrapper.find('tbody').children().find('tr')).to.have.length(cats.length);

//   });
// });
