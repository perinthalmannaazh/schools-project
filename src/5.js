const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
let chosenName;

do {
  const randomIndex = Math.floor(Math.random() * names.length);
  chosenName = names[randomIndex];
} while (chosenName === 'David');

console.log(`Chosen name is ${chosenName}`);
