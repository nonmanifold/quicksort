const quicksorts = require('./quicksorts');
const assert = require('assert');

function testWithFirst() {
    const emptyArr = [];
    const sortedArr = [1, 2, 3];
    const messyArr = [5, 4, 1, 2, 3];

    const qsFirst = quicksorts.first;
    qsFirst(emptyArr);
    //assert.equal(0, qsFirst(emptyArr));
    assert.deepEqual([], emptyArr);

    qsFirst(sortedArr);
    //assert.equal(1, qsFirst(sortedArr));
    //assert.deepEqual([1, 2, 3], sortedArr);

    qsFirst(messyArr);
    //assert.equal(3, qsFirst(messyArr));
    assert.deepEqual([1, 2, 3, 4, 5], messyArr);
}
testWithFirst();

function testWithFinal() {
    const emptyArr = [];
    const sortedArr = [1, 2, 3];
    const messyArr = [5, 4, 1, 2, 3];

    const qsFinal = quicksorts.final;

    qsFinal(emptyArr);
    //assert.equal(0, qsFinal(emptyArr));
    assert.deepEqual([], emptyArr);

    qsFinal(sortedArr);
    //assert.equal(1, qsFinal(sortedArr));
    assert.deepEqual([1, 2, 3], sortedArr);

    qsFinal(messyArr);
    //assert.equal(4, qsFinal(messyArr));
    assert.deepEqual([1, 2, 3, 4, 5], messyArr);
}
testWithFinal();

function testWithMed() {
    const emptyArr = [];
    const sortedArr = [1, 2, 3];
    const messyArr = [5, 4, 1, 2, 3];

    const qsMed = quicksorts.median;

    qsMed(emptyArr);
    //assert.equal(0, qsMed(emptyArr));
    assert.deepEqual([], emptyArr);

    qsMed(sortedArr);
    //assert.equal(1, qsMed(sortedArr));
    assert.deepEqual([1, 2, 3], sortedArr);

    qsMed(messyArr);
    //assert.equal(4, qsMed(messyArr));
    assert.deepEqual([1, 2, 3, 4, 5], messyArr);
}
testWithMed();

console.log('Pass');