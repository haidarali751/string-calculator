#!/usr/bin/env node

import readline from 'readline';
import { add } from './stringCalculator.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the String Calculator CLI");
console.log("Enter your input string (or 'exit' to quit):");

rl.on('line', (line) => {
  if (line.trim().toLowerCase() === 'exit') {
    console.log("Goodbye!");
    rl.close();
    return;
  }

  try {
    const result = add(line);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(error.message);
  }

  console.log("Enter another input string (or 'exit' to quit):");
});