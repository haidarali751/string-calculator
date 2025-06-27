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

  test("should handle an unknown amount of numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("should support new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

   test("should throw an error on negative numbers", () => {
     expect(() => add("1,-2,3,-5")).toThrow(
       "Negative numbers not allowed: -2, -5"
     );
   });
});
