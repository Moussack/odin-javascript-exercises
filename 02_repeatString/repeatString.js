const repeatString = function (theString, numOfWord) {
   // variable below holds the string before doing the loop
   let result = theString;

   // if the word is 0 OR the string is EMPTY this IF will return an empty string
   if (numOfWord === 0 || theString === '') return '';

   // if the word is less than 0 this IF will return ERROR string
   if (numOfWord < 0) return 'ERROR';

   // ELSE it will run this loop and then return the result
   for (let i = 1; i < numOfWord; i++) {
      result = result + theString;
   }

   return result;
};

// const res = repeatString('', 10);
// console.log(res);

// Do not edit below this line
module.exports = repeatString;
