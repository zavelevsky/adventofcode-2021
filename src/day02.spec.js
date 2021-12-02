import { part1, part2 } from './day02.js';
import readFile from './utils/reader.js';

const input = readFile(import.meta.url);

describe('day02 2021', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(
        part1(`forward 5
down 5
forward 8
up 3
down 8
forward 2`),
      ).toEqual(150);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(2070300);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(
        part2(`forward 5
down 5
forward 8
up 3
down 8
forward 2`),
      ).toEqual(900);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(2078985210);
    });
  });
});
