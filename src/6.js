const getRandomJSCode = () => {
  const codes = [
    `console.log("Hello world!");`,
    `alert("This is an alert box!");`,
    `const name = prompt("Enter your name: ");`,
    `if (name) {`,
      `console.log("Welcome, " + name + "!");`,
    `} else {`,
      `console.log("No name entered.");`,
    `}`
  ];
  return codes[Math.floor(Math.random() * codes.length)];
};
