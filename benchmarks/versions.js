const hyperid = require('hyperid');
const {makexorshift32} = require('../lib/xorshift32');
const {str} = require('../lib/str');
const {str5_36} = require('../lib/str5_36');
const {str6_36} = require('../lib/str6_36');
const {str10_36} = require('../lib/str10_36');
const {hyperid: hyperdyperHyperIdGenerate} = require('../lib/hyperid');
const {nanoid} = require('nanoid');
const {generate: shortid} = require('shortid');

const generateHyperId = hyperid();
const hyperdyperHyperId = hyperdyperHyperIdGenerate();
const xorshift32 = makexorshift32();

exports.versions = {
  // 'hyperdyperid xorshift32()': xorshift32,
  'hyperdyperid str5_36()': str5_36,
  'hyperdyperid str6_36()': str6_36,
  'hyperdyperid str10_36()': str10_36,
  'hyperdyperid str(5)': () => str(5),
  'hyperdyperid str(10)': () => str(10),
  'hyperdyperid hyperid()': hyperdyperHyperId,
  'hyperid': generateHyperId,
  'Math.random().toString()': function () {
    Math.random().toString();
  },
  'nanoid': nanoid,
  'shortid': shortid,
};
