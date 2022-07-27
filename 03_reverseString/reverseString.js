const reverseString = function (theString) {
   console.log(`${theString} from original string`);
   // split the string
   const splittedString = theString.split('');

   // the result will be an array and then reverse the array
   const reversedArray = splittedString.reverse();

   // join the array to build the string
   const reversedString = reversedArray.join('');

   // and return the reversed string
   return reversedString;
};

//console.log(reverseString('Hello'));

// Do not edit below this line
module.exports = reverseString;
