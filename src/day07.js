function calcFuel1(x, xArr) {
  return xArr.reduce((total, current) => total + Math.abs(current - x), 0);
}

function calcFuel2(x, xArr) {
  return xArr.reduce((total, current) => {
    let dist = Math.abs(current - x);
    return total + (dist * (dist + 1)) / 2;
  }, 0);
}

export function part1(input) {
  let min = Number.MAX_SAFE_INTEGER,
    max = 0;
  let xArr = input.split(',').map(x => +x);
  xArr.forEach(x => {
    if (x > max) max = x;
    if (x < min) min = x;
  });

  let minFuel = Number.MAX_SAFE_INTEGER;
  for (let i = min; i <= max; i++) {
    let fuel = calcFuel1(i, xArr);
    if (fuel < minFuel) minFuel = fuel;
  }
  return minFuel;
}

export function part2(input) {
  let min = Number.MAX_SAFE_INTEGER,
    max = 0;
  let xArr = input.split(',').map(x => +x);
  xArr.forEach(x => {
    if (x > max) max = x;
    if (x < min) min = x;
  });

  let minFuel = Number.MAX_SAFE_INTEGER;
  for (let i = min; i <= max; i++) {
    let fuel = calcFuel2(i, xArr);
    if (fuel < minFuel) minFuel = fuel;
  }
  return minFuel;
}
