import { part1, part2 } from './day03.js';
import readFile from './utils/reader.js';

const input = readFile(import.meta.url);

describe('day03 2021', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(
        part1(`00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`),
      ).toEqual(198);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(3885894);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(
        part2(`00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`),
      ).toEqual(230);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(4375225);
    });
  });
});
