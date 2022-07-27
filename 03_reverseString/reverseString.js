const reverseString = function (theString) {
   console.log(`${theString} from original string`);
   // split the string
   const splittedString = theString.split('');

   // the result will be an array and then reverse the array
   const reversedArray = splittedString.reverse();

   // join the reversed array to build the reversed string
   const reversedString = reversedArray.join('');

   // and return the reversed string
   return reversedString;
};

//console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
