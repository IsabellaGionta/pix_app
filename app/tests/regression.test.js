import React from 'react';
import renderer from 'react-test-renderer';
import AppCard from '../components/AppCard';


// incomplete test

it('renders correctly', () => {
  const tree = renderer.create(
    <AppCard/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    const json = renderer.create(<AppCard />).toJSON();
    expect(json.props.style.borderWidth).toBe(2);
  })