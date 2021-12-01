import { inputAsNumbersArray } from './utils/reader';

function counter(input, step) {
  const items = inputAsNumbersArray(input);
  return items.reduce((counter, item, i) => {
    return i >= step && item > items[i - step] ? counter + 1 : counter;
  }, 0);
}

export function part1(input) {
  return counter(input, 1);
}

export function part2(input) {
  return counter(input, 3);
}
