const fibonacci = function (num) {
   let seq = [0, 1]; // initialize fibonacci sequence first
   for (let i = 2; i < +num + 1; i++) {
      seq[i] = seq[i - 2] + seq[i - 1];
   }
   //console.log(seq);
   if (num < 0) return `OOPS`;
   return seq[seq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
