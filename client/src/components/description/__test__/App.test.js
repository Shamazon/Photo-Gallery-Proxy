import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';


enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const component = enzyme.shallow(<App />);
  it('renders 1 <App /> component', () => {
    expect(component).toHaveLength(1);
  });
});

// work in progress
// it('should call setRelatedProducts when component mounts', () => {
//   const spy = jest.spyOn(App.prototype, 'setRelatedProducts');
//   const component = enzyme.mount(<App />);
//   component.update();
//   expect(spy).toHaveBeenCalled();
// });
