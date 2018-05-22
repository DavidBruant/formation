import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Filter from './Filter';

it('renders correctly', () => {
  const tree = renderer
    .create(<Filter />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});

it('should call filter function when clicked', () => {
  const filter = jest.fn();

  const filterComponent = shallow(
    <Filter filter={filter} />
  );

  filterComponent.simulate('click');
  expect(filter).toHaveBeenCalled();
});
