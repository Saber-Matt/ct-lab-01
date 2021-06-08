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
