import configureStore from 'redux-mock-store';
import { success, fired, FIRED, SUCCESS } from './actions';

const mockStore = configureStore();

describe('Actions', () => {
  describe('fired', () => {
    it('should return action with type FIRED', () => {
      const name = 'David';
      expect(fired(name)).to.eql({ type: FIRED, payload: name });
    });
  });
  describe('success', () => {
    it('should return action with type success', () => {
      success(200).should.eql({ type: SUCCESS, payload: 200 });
    });
  });

  // NOTE - for educational purposes only
  let store;

  describe('redux mock store', () => {
    beforeEach(() => {
      store = mockStore();
    });
    it('should be an object', () => {
      expect(store).to.be.an('object');
    });
    it('should have a dispatch function', () => {
      expect(store).to.have.property('dispatch');
      expect(store.dispatch).to.be.a('function');
    });
  });
  //  -- end NOTE;

  describe('using store', () => {
    it('should let us dispatch actions', () => {
      store.dispatch(success());
      store.dispatch(fired('Russell Hantz'));
      const actions = store.getActions(); // NOTE: this is a mock store function only
      expect(actions[0]).to.eql(success());
      expect(actions[1]).to.eql({ type: FIRED, payload: 'Russell Hantz' });
    });
  });
});
