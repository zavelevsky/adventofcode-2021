import Combinatorics from 'js-combinatorics';

export function part1(input) {
  const items = input.split('\n').map(x => +x);
  let count = 0;
  for (let i = 1; i < items.length; i++) {
    if (items[i] > items[i - 1]) count++;
  }
  return count;
}

export function part2(input) {
  const items = input.split('\n').map(x => +x);
  let count = 0;
  for (let i = 3; i < items.length; i++) {
    if (items[i] > items[i - 3]) count++;
  }
  return count;
}
