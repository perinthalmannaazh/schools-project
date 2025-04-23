function calculateSum(operands) {
  let result = operands[0];
  
  if (operands.length > 1) {
    for (let i = 1; i < operands.length; i++) {
      const operand = operands[i];
      
      if (typeof operand === 'number') {
        result += operand;
      } else if (operand instanceof Array) {
        const elements = operand.map(element => calculateSum(element));
        
        return Math.max(...elements);
      }
    }
  }

  console.log(result);
}

calculateSum([10, [20, 30], 40]);
