const Benchmark = require('benchmark');
const hyperid = require('hyperid');
const {makexorshift32} = require('../lib/xorshift32');
const {str5_36} = require('../lib/str5_36');
const {str6_36} = require('../lib/str6_36');
const {str10_36} = require('../lib/str10_36');

const generateHyperId = hyperid();
const xorshift32 = makexorshift32();

const suite = new Benchmark.Suite;

suite
  .add('xorshift32()', function() {
    xorshift32();
  })
  .add('str5_36()', function() {
    str5_36();
  })
  .add('str6_36()', function() {
    str6_36();
  })
  .add('str10_36()', function() {
    str10_36();
  })
  .add('hyperid', function() {
    generateHyperId();
  })
  .add('Math.random().toString()', function() {
    Math.random().toString();
  })

suite
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
