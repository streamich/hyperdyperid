const Benchmark = require('benchmark');
const {xorshift32} = require('../lib/xorshift32');
const {randomU32} = require('../lib/randomU32');

const randInt = (min, max) => {
  return Math.round(Math.random() * (max - min + 1)) + min;
};

const versions = {
  'xorshift32()': () => xorshift32(),
  'randomU32(min, max)': () => randomU32(123, 1234),
  'Math.random() * (max - min + 1) + min': () => randInt(123, 1234),
};

const suite = new Benchmark.Suite;

for (const name in versions) {
  suite.add(name, versions[name]);
}

suite
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();