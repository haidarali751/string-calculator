export function add(input) {
  if (!input) return 0;

  let delimiterPattern = /,|\n/;
  let numbersPart = input;

  if (input.startsWith("//")) {
    const delimiterSectionEnd = input.indexOf("\n");
    const customDelimiter = input.slice(2, delimiterSectionEnd);
    delimiterPattern = new RegExp(`[${customDelimiter}]`);
    numbersPart = input.slice(delimiterSectionEnd + 1);
  }

  const numbers = numbersPart.split(delimiterPattern).map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}