const Benchmark = require('benchmark');
const hyperid = require('hyperid');

const generateHyperId = hyperid();

const suite = new Benchmark.Suite;

suite
  .add('Math.random()', function() {
    Math.random();
  })
  .add('hyperid', function() {
    generateHyperId();
  })

suite
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
