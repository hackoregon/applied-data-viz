import React from 'react';
import { shallow } from 'enzyme';
import Something from './Something';

describe('<Something />', () => {
  const expected = 'SOME';
  const rendered = shallow(<Something thing={expected} />);
  it('renders SOME thing', () => {
    rendered.is('Something');
  });
  it('should render an h1 with the expected text', () => {
    expect(rendered.find('h1')).to.have.length(1);
    expect(rendered.text()).to.eql(expected);
  });
});
