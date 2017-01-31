const { fired, FIRED } = require('./actions');

describe('Actions', () => {
  describe('fired', () => {
    it('should return action with type FIRED', () => {
      const name = 'David';
      expect(fired(name)).to.eql({ type: FIRED, payload: name });
    });
  });
});
