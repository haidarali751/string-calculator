export function add(input) {
  if (!input) return 0;

  let delimiterPattern = /,|\n/;
  let numbersPart = input;

  if (input.startsWith("//")) {
    const delimiterSectionEnd = input.indexOf("\n");
    const delimiterLine = input.slice(2, delimiterSectionEnd);

    if (delimiterLine.startsWith("[") && delimiterLine.endsWith("]")) {
      delimiterPattern = new RegExp(
        delimiterLine
          .slice(1, -1)
          .split("][")
          .map((d) => d.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
          .join("|")
      );
    } else {
      delimiterPattern = new RegExp(
        `[${delimiterLine.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}]`
      );
    }

    numbersPart = input.slice(delimiterSectionEnd + 1);
  }

  const numbers = numbersPart.split(delimiterPattern).map(Number);

  const negativeNumbers = numbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numbers
    .filter((num) => num <= 1000)
    .reduce((sum, num) => sum + num, 0);
}
