function choosePivotFirst(arr, begin, end) {
    return begin;
}

function choosePivotFinal(arr, begin, end) {
    return end;
}
function swapInPlace(arr, i, j) {
    const a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
}
function partition(arr, begin, p, end) {
    if (p > begin) {
        swapInPlace(arr, p, begin); // place pivot element at the beginning of subarray
    }
    var pivot = arr[begin]; // we've placed pivot at the beginning of subarray
    var i = begin + 1; // pointer to boundary between elements that less than pivot and greater than pivot
    for (var j = i; j <= end; j++) {
        //scanning through remaining array
        if (arr[j] < pivot) {
            swapInPlace(arr, i, j);// swap is redundant when i===j, but this still will work
            i++;//advance  pointer to boundary
        }
    }
    swapInPlace(arr, begin, i - 1);//place pivot element into its correct place, before boundary
    return i;// the boundary between two partitioned parts of subarray
}

function quicksort(arr, choosePivotFn, begin, end) {
    if (end - begin === 1) {
        return 0;
    } else {
        const p = choosePivotFn(arr, begin, end);
        var comparsions = (end - begin) - 1;
        var boundary = partition(arr, begin, p, end);
        comparsions += quicksort(arr, choosePivotFn, begin, boundary);
        comparsions += quicksort(arr, choosePivotFn, boundary, end);
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
