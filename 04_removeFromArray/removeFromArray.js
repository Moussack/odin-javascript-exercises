const removeFromArray = function (arrayOfNums, item) {
   // find the method to delete the array based on the item to remove
   const result = arrayOfNums.filter((num) => num !== item);

   return result;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
