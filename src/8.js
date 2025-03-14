function getRandomCode() {
  let code = "";

  // Generate a random string of letters and numbers
  for (let i = 0; i < 10; i++) {
    const char = String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
    code += Math.round(Math.random()) ? char : char.toUpperCase();
  }

  // Add a hyphen and capitalize the first letter
  code = code[0].toUpperCase() + "-" + code.substring(1);

  return code;
}
