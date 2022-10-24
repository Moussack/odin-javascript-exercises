const palindromes = function (str) {
   const word = str
      .trim()
      .toLowerCase()
      .replace(/[&\/\\#,+()$~%.!'":*?<>{} ]/g, '');

   const reversed = str
      .split('')
      .reverse()
      .join('')
      .trim()
      .toLowerCase()
      .replace(/[&\/\\#,+()$~%.!'":*?<>{} ]/g, '');

   console.log(word, reversed);

   if (word === reversed) return true;
   return false;
};

// Do not edit below this line
module.exports = palindromes;
