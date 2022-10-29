const findTheOldest = function (people) {
   const yearsLived = people.map((pers) => {
      const year = new Date().getFullYear();
      const yearsOfLive = pers.yearOfDeath - pers.yearOfBirth;

      if (!pers.yearOfDeath) {
         // USE DATE OBJ HERE
         console.log(`object`);
         return {
            name: pers.name,
            yearOfBirth: pers.yearOfBirth,
            yearOfDeath: year,
            yol: year - pers.yearOfBirth,
         };
      }

      return {
         name: pers.name,
         yearOfBirth: pers.yearOfBirth,
         yearOfDeath: pers.yearOfDeath,
         yol: yearsOfLive,
      };
   });

   // YOU CAN DONE IT WITHOUT SORT, uncomment the 2 lines of code below and comment the sort method
   // console.log(`Unsorted :`, yearsLived); //unsorted
   // return yearsLived[0].yol < yearsLived[1].yol ? yearsLived[1] : yearsLived[0];

   const sorted = yearsLived.sort((a, b) => {
      if (a.yol > b.yol) {
         return -1;
      } else {
         return 1;
      }
   });

   //console.log(`sorted :`, sorted);
   if (sorted[0].yol > sorted[1].yol) return sorted[0];
   return sorted[1];

   // done it for hours, lesson : do the different test cases with one solution, dont assume all test cases are the same
};

// Do not edit below this line
module.exports = findTheOldest;
