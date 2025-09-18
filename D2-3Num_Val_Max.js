// Import the readline module for user input
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Create an interface for reading user input
const rl = readline.createInterface({ input, output });

// Define the main function to run the logic
async function findMaximum() {
  // --- INPUT PHASE ---
  const aStr = await rl.question('Inserire primo numero: ');
  const bStr = await rl.question('Inserire secondo numero: ');
  const cStr = await rl.question('Inserire terzo numero: ');

  // Close the input interface as it's no longer needed
  rl.close();

  // Convert text input to numbers
  const a = parseFloat(aStr);
  const b = parseFloat(bStr);
  const c = parseFloat(cStr);
  
  // --- LOGIC PHASE ---
  let max;

  // First comparison: find the larger of the first two numbers
  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  // Second comparison: check if the third number is larger than the current max
  if (c > max) {
    max = c;
  }

  // --- OUTPUT PHASE ---
  console.log(`Il numero più grande è: ${max}`);
}

// Run the main function
findMaximum();