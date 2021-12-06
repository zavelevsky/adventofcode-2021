function lanterns(input, days) {
  let state = new Array(9).fill(0);
  input.split(',').forEach(c => state[c]++);
  for (let i = 0; i < days; i++) {
    let prev = state[0],
      new1 = state[0];
    for (let j = 8; j >= 0; j--) {
      let tmp = state[j];
      state[j] = prev;
      prev = tmp;
    }
    state[6] += new1;
  }
  return state.reduce((a, b) => a + b);
}

export function part1(input) {
  return lanterns(input, 80);
}

export function part2(input) {
  return lanterns(input, 256);
}
