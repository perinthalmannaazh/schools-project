// Create an array of numbers from 1 to 10
const nums = [];
for (let i = 1; i <= 10; i++) {
  nums.push(i);
}

// Use the Fisher-Yates shuffle algorithm to randomly reorder the array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Call the shuffle function and log the result to the console
console.log(shuffle(nums));
