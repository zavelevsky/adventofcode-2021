class State {
  constructor() {
    this.state = {};
  }
  drawLine(coords) {
    const xStep = coords[0] === coords[2] ? 0 : coords[0] > coords[2] ? -1 : 1;
    const yStep = coords[1] === coords[3] ? 0 : coords[1] > coords[3] ? -1 : 1;
    const distance = Math.max(
      Math.abs(coords[1] - coords[3]),
      Math.abs(coords[0] - coords[2]),
    );
    for (let i = 0; i <= distance; i++) {
      let key = `${coords[0] + i * xStep},${coords[1] + i * yStep}`;
      if (this.state[key]) this.state[key]++;
      else this.state[key] = 1;
    }
  }
  countBy(predicate) {
    return Object.keys(this.state).filter(key => predicate(this.state[key]))
      .length;
  }
}

export function part1(input) {
  let state = new State();
  input
    .split('\n')
    .map(line => line.split(/\D+/g).map(x => +x))
    .filter(line => line[0] === line[2] || line[1] === line[3])
    .forEach(line => state.drawLine(line));

  return state.countBy(i => i >= 2);
}

export function part2(input) {
  let state = new State();
  input
    .split('\n')
    .map(line => line.split(/\D+/g).map(x => +x))
    .filter(
      line =>
        line[0] === line[2] ||
        line[1] === line[3] ||
        Math.abs(line[0] - line[2]) === Math.abs(line[1] - line[3]),
    )
    .forEach(line => state.drawLine(line));

  return state.countBy(i => i >= 2);
}
