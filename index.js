const readline = require('readline');
const fs = require('fs');
const path = require('path');
const fileName = '_32387ba40b36359a38625cbb397eee65_QuickSort.txt';
const pathName = path.join('./', fileName);
const quicksort = require('./quicksort');
const arr = [];

const counter = function (arr) {
    const sorted = quicksort(arr);
};

const rl = readline.createInterface({
    input: fs.createReadStream(pathName)
});

rl.on('line', function (line) {
    arr.push(parseInt(line));
});
rl.on('close', function () {
    counter(arr);
});