const readline = require('readline');
const fs = require('fs');
const path = require('path');
const fileName = '_32387ba40b36359a38625cbb397eee65_QuickSort.txt';
const pathName = path.join('./', fileName);
const quicksorts = require('./quicksorts');
const arr = [];

const counter = function (arr) {
    const comparsionsFirst = quicksorts.first(arr.slice());
    console.log('first: ' + comparsionsFirst);

    const comparsionsFinal = quicksorts.final(arr.slice());
    console.log('final: ' + comparsionsFinal);

    const comparsionsMedian = quicksorts.median(arr.slice());
    console.log('median: ' + comparsionsMedian);

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