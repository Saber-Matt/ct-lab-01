import { getName, copyAndPush, capitalizeAndFilter, fetchQuotes } from './red-green.js';


// const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
// getName(character); // returns Aang


describe('gettin that dog name', () => {
  it('gets the name value', () => {
    const expected = 'spot';

    const actual = getName(spot);

    expect(expected).toEqual(actual);
  });
});




describe('add new number to array of numbers', () => {
  it('adds number to end of array', () => {
    const numbers = [1, 2, 3];
    // copyAndPush(numbers, 4); // return [1, 2, 3, 4];

    const expected = [1, 2, 3, 4];

    const actual = copyAndPush(numbers, 4);

    expect(expected).toEqual(actual);
    expect(numbers).toEqual([1, 2, 3]);
  });
});

describe('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f.', () => {

  it('capitalize first letter of each item of array and remove those that start with "f"', () => {
    const strings = ['potatoes', 'dragon fruit', 'flood plains', 'golf', 'Farquad', 'Appalachia'];

    //const expected = ['POTATOES', 'DRAGON FRUIT', 'GOLF', 'APPALACHIA'];
    //const actual = strings;

    expect(capitalizeAndFilter(strings)).toEqual(['POTATOES', 'DRAGON FRUIT', 'GOLF', 'APPALACHIA']);
  });
});
