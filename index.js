'use strict';

let uniqueRandomArray = require('unique-random-array');
let babyNames = require('./baby-names.json');

module.exports = {
  all: all,
  random: singleRandom,
  randomAmount: randomAmount,
  startsWith: startsWith
};

const all = () => babyNames

const singleRandom = () => uniqueRandomArray(babyNames)

function randomAmount(number) {
  if (typeof number === "number") {
    // @todo
  } else {
    return `Error parsing ${number}!`;
  }
};

function startsWith(letter) {
  if ((letter.length >= 1) && (typeof letter === "string")) {
    // @todo
  } else {
    return `Error parsing ${letter}!`;
  }
};

// @todo: make `random` function be same for single and multiple function
