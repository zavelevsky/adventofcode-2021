import { part1, part2 } from './day07.js';
import readFile from './utils/reader.js';

const input = readFile(import.meta.url);

describe('day07 2021', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(part1('16,1,2,0,4,2,7,1,2,14')).toEqual(37);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(347509);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(part2('16,1,2,0,4,2,7,1,2,14')).toEqual(168);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(98257206);
    });
  });
});
