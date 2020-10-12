const Benchmark = require('benchmark');
const {versions} = require('./versions');

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