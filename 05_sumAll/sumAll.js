const sumAll = function (a, b) {
   // a variable to hold the result
   let result = 0;

   // check IF a or b is greater and check non number
   if (a > b) {
      for (let i = b; i <= a; i++) {
         result += i;
      }
      return result;
   } else if (a < 0 || b < 0 || isNaN(a) || isNaN(b) || typeof a === 'string' || typeof b === 'string') {
      return 'ERROR';
   }

   // The normal operation if the IF block failed
   for (let i = a; i <= b; i++) {
      result += i;
   }

   return result;
};

//console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
