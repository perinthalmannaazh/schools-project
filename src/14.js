const getRandomCode = () => {
  const codeLength = Math.floor(Math.random() * 10) + 5;
  let randomCode = "";
  for (let i = 0; i < codeLength; i++) {
    randomCode += Math.floor(Math.random() * 10);
  }
  return randomCode;
};
