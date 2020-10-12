# `hyperdyperid`

Fastest random ID and random string generation for Node.js

- `str5_36` &mdash; generates random 5 character alphanumeric string.
- `str6_36` &mdash; generates random 6 character alphanumeric string.
- `str10_36` &mdash; generates random 10 character alphanumeric string.
- `str(len [, alphabet])` &mdash; generates any length random string using an `alphabet`. Use like `str(10, '0123456789')`.
- `hyperid` &mdash; generates "hyperid" like ID.
- `xorshift32` &mdash; iterates through pseudo random numbers using "xorshift32" algorithm.


## Usage

Install

```
yarn add hyperdyperid
```

Generate base36 10-character string:

```js
const {str10_36} = require('hyperdyperid/lib/str10_36');

str10_36();
// lxifpmidcr
// cn41vpmtxo
// dj2u5ghp3r
// 6yro5d0g9l
```


## Performance

```
node benchmarks/main.js 
hyperdyperid str5_36() x 47,074,819 ops/sec ±0.92% (90 runs sampled)
hyperdyperid str6_36() x 42,587,029 ops/sec ±1.10% (90 runs sampled)
hyperdyperid str10_36() x 17,570,069 ops/sec ±1.09% (89 runs sampled)
hyperdyperid str(5) x 10,311,356 ops/sec ±0.80% (91 runs sampled)
hyperdyperid str(10) x 4,826,240 ops/sec ±0.81% (92 runs sampled)
hyperdyperid hyperid() x 14,637,200 ops/sec ±1.60% (84 runs sampled)
hyperid x 13,187,142 ops/sec ±0.97% (88 runs sampled)
Math.random().toString() x 4,515,394 ops/sec ±1.05% (88 runs sampled)
nanoid x 409,505 ops/sec ±1.28% (90 runs sampled)
shortid x 39,309 ops/sec ±1.09% (88 runs sampled)
Fastest is hyperdyperid str5_36()
```


## License

[MIT © Vadim Dalecky](LICENSE).
