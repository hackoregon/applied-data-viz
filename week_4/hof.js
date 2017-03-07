const chai  = require('chai');

const { expect } = chai;

const map = (arr, checkForType) => {
  let result = [];
  for (index of arr) {
    if(checkForType(index)){
    result
}
  }
  return result;
}

const checkForType = obj => obj.type === 'A';

describe('map', function () {
  it('is a function', function () {
    expect(map).to.be.a('function');
  });
  it('returns an array', function () {
    const testArr = [ { type: 'A'}, { type: 'B'} ];
    expect(map(testArr, checkForType)).to.eql([ true, false]);
  });
});