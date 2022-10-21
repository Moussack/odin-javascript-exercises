const add = function (a, b) {
   return a + b;
};

const subtract = function (a, b) {
   return a - b;
};

const sum = function (nums) {
   /*    let result = 0;
   nums.forEach((num) => {
      result = result + num;
   });
   return result; */

   // Using reduce
   let result = nums.reduce((prev, cur) => prev + cur, 0);
   return result;
};

const multiply = function (nums) {
   // Using reduce
   let result = nums.reduce((prev, cur) => prev * cur);
   return result;
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
   add,
   subtract,
   sum,
   multiply,
   power,
   factorial,
};
