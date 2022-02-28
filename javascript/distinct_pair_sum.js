//i
  //array of numbers
  //k target value for pairs
//o
 //array of arrays
   //each array adds up to the target number
//e
  //array can be empty
  //array can have one value
//c
  //no duplicate number sums
function distinctPairSum(arr, k) {
  const pairs = {}

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    const sum = current + next;

    if (!pairs[next] && !pairs[current] && sum === k) {
      pairs[next] = [next, current];
    }
  }

  return Object.values(pairs)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
