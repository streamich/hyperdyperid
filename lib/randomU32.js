const {xorshift32} = require('./xorshift32');

/** Generate a random 32-bit unsigned integer in the specified [min, max] range. */
function randomU32(min, max) {
  return (xorshift32() >>> 1) % (max - min + 1) + min;
}

exports.randomU32 = randomU32;
