const ftoc = function (ftemp) {
   const celcius = (ftemp - 32) * 0.5556;
   return +celcius.toFixed(1);
};

const ctof = function (ctemp) {
   const fahrenheit = ctemp * 1.8 + 32;
   return +fahrenheit.toFixed(1);
};

console.log(ftoc(-100));
console.log(ctof(100));

// Do not edit below this line
module.exports = {
   ftoc,
   ctof,
};
