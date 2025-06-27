import { add } from './stringCalculator';

describe('String Calculator', () => {
  test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return number for a single number', () => {
    expect(add("1")).toBe(1);
  });

  test("should sum two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });
});
