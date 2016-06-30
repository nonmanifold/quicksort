const quicksorts = require('./quicksorts');
const assert = require('assert');

function testWithFirst() {
    const emptyArr = [];
    const sortedArr = [1, 2, 3];
    const messyArr = [5, 4, 1, 2, 3];

    const qsFirst = quicksorts.first;
    assert.equal(0, qsFirst(emptyArr));
    assert.deepEqual([], emptyArr);

    assert.equal(3, qsFirst(sortedArr));
    assert.deepEqual([1, 2, 3], sortedArr);

    assert.equal(8, qsFirst(messyArr));
    assert.deepEqual([1, 2, 3, 4, 5], messyArr);

    const reverseArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    assert.equal(36, qsFirst(reverseArr));
    assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9], reverseArr);
}
testWithFirst();

function testWithFinal() {
    const emptyArr = [];
    const sortedArr = [1, 2, 3];
    const messyArr = [5, 4, 1, 2, 3];

    const qsFinal = quicksorts.final;

    assert.equal(0, qsFinal(emptyArr));
    assert.deepEqual([], emptyArr);

    assert.equal(3, qsFinal(sortedArr));
    assert.deepEqual([1, 2, 3], sortedArr);

    assert.equal(6, qsFinal(messyArr));
    assert.deepEqual([1, 2, 3, 4, 5], messyArr);

    const reverseArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    assert.equal(36, qsFinal(reverseArr));
    assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9], reverseArr);
}
testWithFinal();

function testWithMed() {
    const emptyArr = [];
    const sortedArr = [1, 2, 3];
    const messyArr = [5, 4, 1, 2, 3];

    const qsMed = quicksorts.median;

    assert.equal(0, qsMed(emptyArr));
    assert.deepEqual([], emptyArr);

    assert.equal(2, qsMed(sortedArr));
    assert.deepEqual([1, 2, 3], sortedArr);

    assert.equal(6, qsMed(messyArr));
    assert.deepEqual([1, 2, 3, 4, 5], messyArr);

    const reverseArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    assert.equal(16, qsMed(reverseArr));
    assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9], reverseArr);
}
testWithMed();

assert.equal(1, quicksorts.getMiddleElemIdx([4, 5, 6, 7], 0, 3));
assert.equal(2, quicksorts.getMiddleElemIdx([4, 5, 6, 7, 8], 0, 4));
assert.equal(2, quicksorts.getMiddleElemIdx([8, 2, 4, 5, 7, 1], 0, 5));
assert.equal(2, quicksorts.choosePivotMedian([8, 2, 4, 5, 7, 1], 0, 5));

console.log('Pass');