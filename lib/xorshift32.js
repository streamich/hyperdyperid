function makexorshift32() {
  var x = 1 + Math.round(Math.random() * ((-1>>>0)-1));

  return function xorshift32() {
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    return x;
  };
}

var xorshift32 = makexorshift32();

/** Generate a random 32-bit unsigned integer in the specified [min, max] range. */
function randomU32(min, max) {
  return (xorshift32() >>> 1) % (max - min + 1) + min;
}

exports.makexorshift32 = makexorshift32;
exports.xorshift32 = xorshift32;
exports.randomU32 = randomU32;


console.log(randomU32(0, 5));