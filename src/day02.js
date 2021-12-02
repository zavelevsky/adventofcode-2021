export function part1(input) {
  const location = { h: 0, d: 0 };
  const actions = {
    forward: num => (location.h += num),
    down: num => (location.d += num),
    up: num => (location.d -= num),
  };
  input
    .split('\n')
    .map(line => line.split(' '))
    .forEach(action => {
      actions[action[0]](+action[1]);
    });
  return location.h * location.d;
}

export function part2(input) {
  const location = { h: 0, d: 0, a: 0 };
  const actions = {
    forward: num => {
      location.h += num;
      location.d += location.a * num;
    },
    down: num => (location.a += num),
    up: num => (location.a -= num),
  };
  input
    .split('\n')
    .map(line => line.split(' '))
    .forEach(action => {
      actions[action[0]](+action[1]);
    });
  return location.h * location.d;
}
