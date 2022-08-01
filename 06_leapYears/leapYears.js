const leapYears = function (years) {
   // determine the year that can divided by 4, 100 & 400 using modulo operation
   if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
      return true;
   } else {
      return false;
   }
};

//console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
