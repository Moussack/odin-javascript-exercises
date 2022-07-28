const removeFromArray = function (arrayOfNums, ...items) {
   // find the method to delete the array based on the item to remove
   // using rest operator so the function argument can have multiple arguments
   itemToDelete = items;
   const result = arrayOfNums.filter((num) => !itemToDelete.includes(num));

   return result;
};

//console.log(removeFromArray([1, 2, 3, 4], 2, 6, 7));

// Do not edit below this line
module.exports = removeFromArray;
