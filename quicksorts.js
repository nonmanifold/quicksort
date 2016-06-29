function choosePivotFirst(arr, begin, end) {
    return begin;
}

function choosePivotFinal(arr, begin, end) {
    return end;
}

function partition(arr, begin, p, end) {

}

function quicksort(arr, choosePivotFn, begin, end) {
    if (end - begin === 1) {
        return 0;
    } else {
        const p = choosePivotFn(arr, begin, end);
        var comparsions = (end - begin) - 1;
        partition(arr, begin, p, end);
        comparsions += quicksort(arr, choosePivotFn, begin, p);
        comparsions += quicksort(arr, choosePivotFn, p, end);
        return comparsions;
    }
}
module.exports = {
    first: function quicksortFirst(arr) {
        return quicksort(arr, choosePivotFirst, 0, arr.length)
    },
    final: function quicksortFinal(arr) {
        return null
    },
    median: function quicksortMedian(arr) {
        return null
    }
};
