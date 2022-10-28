const findTheOldest = function (people) {
   const yearsLived = people.map((pers) => {
      if (!pers.yearOfDeath) {
         console.log(`object`);
         pers.yearOfDeath = 0;
      }

      const yearsOfLive = pers.yearOfDeath - pers.yearOfBirth;
      return {
         name: pers.name,
         yearOfBirth: pers.yearOfBirth,
         yearOfDeath: pers.yearOfDeath,
         yol: yearsOfLive,
      };
   });

   const sorted = yearsLived.sort((a, b) => {
      if (a.yol > b.yol) {
         return -1;
      } else {
         return 1;
      }
   });
   console.log(sorted);
   return sorted[0];

   /*  const yearsLived = people.map((pers) => {
      if (!pers.yearOfDeath) {
         console.log(`object`);
         pers.yearOfDeath = 0;
      }
      return pers.yearOfDeath - pers.yearOfBirth;
   });

   console.log(yearsLived);

   people.forEach((p, i) => {
      p.current = yearsLived[i];
   });

   const sorted = people.sort((a, b) => {
      if (a.current > b.current) return -1;
      return 1;
   });

   console.log(sorted);

   return sorted[0]; */
};

// Do not edit below this line
module.exports = findTheOldest;
