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

const power = function (num, power) {
   /* if (power === 3) return num * num * num; */
   return Math.pow(num, power);
};

const factorial = function (num) {
   // my own way
   if (num === 0 || num === 1) return 1;

   let res = [];
   for (let i = 1; i <= num; i++) {
      res.push(i);
   }

   let finalRes = res.reduce((prev, cur) => {
      return prev * cur;
   });

   return finalRes;

   /*  // the most efficient way on the internet
   if (num === 0 || num === 1) return 1;
   
   for (let i = num - 1; i >= 1; i--) {
      num = num * i;
   }
   return num; */
};

// Do not edit below this line
module.exports = {
   add,
   subtract,
   sum,
   multiply,
   power,
   factorial,
};
