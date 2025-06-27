export function add(input) {
  if (!input) return 0;

  // Default delimiters are commas and newlines
  let delimiterPattern = /,|\n/;
  let numbersPart = input;

  // Handle custom delimiters if present
  if (input.startsWith("//")) {
    const delimiterSectionEnd = input.indexOf("\n");
    const delimiterLine = input.slice(2, delimiterSectionEnd);

    if (delimiterLine.startsWith("[") && delimiterLine.endsWith("]")) {
      // Support multiple delimiters of any length
      delimiterPattern = new RegExp(
        delimiterLine
          .slice(1, -1) // Remove enclosing brackets
          .split("][") // Split multiple delimiters
          .map(d => d.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")) // Escape special regex characters
          .join("|") // Combine delimiters with regex OR
      );
    } else {
      // Support single-character custom delimiters
      delimiterPattern = new RegExp(`[${delimiterLine.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}]`);
    }

    numbersPart = input.slice(delimiterSectionEnd + 1);
  }

  const numbers = numbersPart.split(delimiterPattern).map(Number);

  // Throw an error if any negative numbers are found
  const negativeNumbers = numbers.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
  }

  // Ignore numbers greater than 1000 and calculate the sum
  return numbers
    .filter(num => num <= 1000)
    .reduce((sum, num) => sum + num, 0);
}