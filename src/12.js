  var getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  var randomNumber = getRandomNumber(1, 5);
  
  switch(randomNumber) {
    case 1:
      console.log("Heads");
      break;
    case 2:
      console.log("Tails");
      break;
    case 3:
      console.log("Maybe");
      break;
    case 4:
      console.log("Probably not");
      break;
    case 5:
      console.log("Who knows?");
      break;
  }