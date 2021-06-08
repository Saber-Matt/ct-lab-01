import { getName } from './red-green.js';

const spot = { name: 'spot', age: 5, weight: '20 lbs' };
getName(spot); // returns spot

const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
getName(character); // returns Aang


describe('test suite', () => {
  it('gets the name value', () => {
    const expected = 'spot';

    const actual = getName(spot);

    expect(expected).toEqual(actual);
  });
});



