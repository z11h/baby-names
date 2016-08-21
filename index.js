'use strict';

let uniqueRandomArray = require('unique-random-array');
let babyNames = require('./baby-names.json');

const all = () => babyNames

const singleRandom = () => uniqueRandomArray(babyNames)

function randomAmount(number) {
  if (typeof number === "number" && (number > 0)) {
    const list = [];

    for (let i = 0; i <= number; i++) {
      list.push(singleRandom())
    };

    return list;
  } else {
    return `Error parsing ${number}!`;
  }
};

function startsWith(l) {
  if ((l.length >= 1) && (typeof l === "string")) {
    l = l.toLowerCase().trim();

    const results = [];
    // @todo: use forEach or for...in
    for (let i = 0; i <= babyNames.length; i++) {
      if (babyNames[i].startsWith(l)) {
        results.push(babyNames[i]);
      };
    };

  } else {
    return `Error parsing ${l}!`;
  }
};

// @todo: make `random` function be same for single and multiple function

module.exports = {
  all: all,
  random: singleRandom,
  randomAmount: randomAmount,
  startsWith: startsWith
};
