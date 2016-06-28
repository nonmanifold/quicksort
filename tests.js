const quicksorts = require('./quicksorts');

const assert = require('assert');

const emptyArr=[];

const qsFirst= quicksorts.first;
assert.equal(0, qsFirst(emptyArr));


const qsFinal= quicksorts.final;
assert.equal(0, qsFinal(emptyArr));

const qsMed= quicksorts.median;
assert.equal(0, qsMed(emptyArr));



console.log('Pass');