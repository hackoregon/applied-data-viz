import add from './index';

describe('add function', () => {
  it('should add 2', () => {
    expect(add(1)).to.eql(3);
  });
});

