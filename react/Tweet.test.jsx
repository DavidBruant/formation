import React from 'react';
import renderer from 'react-test-renderer';
import Tweet from './Tweet';

it('renders correctly', () => {
  const tweet = {
    text: 'test'
  };

  const tree = renderer
    .create(<Tweet tweet={tweet}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
