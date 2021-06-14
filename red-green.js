import request from 'superagent';
export function getName({ name }) {

  return name;
}

export function copyAndPush(arr, number) {
  return [...arr, number];

  // const copyArr = arr;
  // console.log(copyArr);
  // copyArr.push(number);
  // return copyArr;
}

export function capitalizeAndFilter(arr) {

  const newArr = [];

  // eslint-disable-next-line keyword-spacing
  for (const i of arr) {
    // eslint-disable-next-line keyword-spacing
    if ((i[0] !== 'f') && (i[0] !== 'F')) {
      newArr.push(i.toUpperCase());
      console.log(newArr);

    }
  }


  return newArr;
}

export const fetchQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.jason())
    .then(data => ({
      name: data[0].character,
      text: data[0].quote,
      image: data[0].image
    }));
};
