import { part1, part2 } from './day01.js';
import readFile from './utils/reader.js';

const input = readFile(import.meta.url);

describe('day01 2021', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(
        part1(`199
        200
        208
        210
        200
        207
        240
        269
        260
        263`),
      ).toEqual(7);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(1791);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(
        part2(`199
        200
        208
        210
        200
        207
        240
        269
        260
        263`),
      ).toEqual(5);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(1822);
    });
  });
});
