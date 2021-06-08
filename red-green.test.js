import { getName, copyAndPush } from './red-green.js';

const spot = { name: 'spot', age: 5, weight: '20 lbs' };
getName(spot); // returns spot

const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
getName(character); // returns Aang


describe('test suite', () => {
  it.skip('gets the name value', () => {
    const expected = 'spot';

    const actual = getName(spot);

    expect(expected).toEqual(actual);
  });
});


const numbers = [1, 2, 3];
copyAndPush(numbers, 4); // return [1, 2, 3, 4];

describe('add new number to array of numbers', () => {
  it('adds number to end of array', () => {
    const expected = [1, 2, 3, 4];

    const actual = copyAndPush(numbers, 4);

    expect(expected).toEqual(actual);
  });
});
