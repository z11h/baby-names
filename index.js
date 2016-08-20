'use strict';

let uniqueRandomArray = require('unique-random-array');
let babyNames = require('./baby-names.json');

module.exports= {
  all: babyNames,
  random: singleRandom,
  randomAmount: randomAmount,
  startsWith: startsWith
}

const singleRandom = () => uniqueRandomArray(babyNames)

function randomAmount(number) {
  if (typeof number === "number") {

  } else {
    return `Error parsing ${number}!`
  }
};

function startsWith(letter) {
  if ((letter.length >= 1) && (typeof letter === "string")) {

  } else {
    return `Error parsing ${letter}!`
  }
};
