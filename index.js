'use strict';

let uniqueRandomArray = require('unique-random-array');
let babyNames = require('./baby-names.json');

exports.all = babyNames;
exports.random = uniqueRandomArray(babyNames);
