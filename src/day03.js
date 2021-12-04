function calc(arr) {
  let sum = 0;
  arr.reverse().forEach((num, index) => {
    sum += num * Math.pow(2, index);
  });
  return sum;
}

export function part1(input) {
  const numArrays = input.split('\n').map(line => line.split('').map(x => +x));
  const checkArray = new Array(numArrays[0].length).fill(0);
  numArrays.forEach(arr => {
    arr.forEach((num, index) => {
      num === 0 ? checkArray[index]-- : checkArray[index]++;
    });
  });

  let gammaArr = checkArray.map(num => {
    return num > 0 ? 1 : 0;
  });
  let gamma = calc(gammaArr);
  let epsilonArr = checkArray.map(num => {
    return num > 0 ? 0 : 1;
  });
  let epsilon = calc(epsilonArr);

  return gamma * epsilon;
}

function pick(arr, index, majority, prefer1s) {
  const arr0s = [],
    arr1s = [];
  arr.forEach(numArr => {
    if (numArr[index] === 1) arr1s.push(numArr);
    else arr0s.push(numArr);
  });
  if (arr1s.length > arr0s.length) return majority ? arr1s : arr0s;
  if (arr0s.length > arr1s.length) return majority ? arr0s : arr1s;
  return prefer1s ? arr1s : arr0s;
}

export function part2(input) {
  const numArrays = input.split('\n').map(line => line.split('').map(x => +x));
  let picked = numArrays;
  for (let i = 0; i < numArrays[0].length && picked.length > 1; i++) {
    picked = pick(picked, i, true, true);
  }

  let Oxygen = calc(picked[0]);
  picked = numArrays;
  for (let i = 0; i < numArrays[0].length && picked.length > 1; i++) {
    picked = pick(picked, i, false, false);
  }
  let CO2 = calc(picked[0]);
  return Oxygen * CO2;
}
