function findCommonElements(list1, list2) {
  let common = [];
  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      common.push(list1[i]);
    }
  }
  return common;
}

// Example usage:
const list1 = [1, 2, 3, 4, 5];
const list2 = [4, 5, 6, 7, 8];

console.log(findCommonElements(list1, list2)); // Output: [4, 5]
