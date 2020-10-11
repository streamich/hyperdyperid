function makexorshift32() {
  var x = (1 + (Math.random() * (0xFFFF - 1))) | 0;

  return function xorshift32() {
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    return x;
  };
}

exports.makexorshift32 = makexorshift32;
