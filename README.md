# baby-names [![Build Status](https://travis-ci.org/ZakariaRidouh/baby-names.svg?branch=master)](https://travis-ci.org/ZakariaRidouh/baby-names)
:baby: get popular baby names!

## Install

```
$ npm install --save baby-names
```

## Usage

```javascript
const babyNames = require('baby-names');

babyNames.all()
// returns array of names

babyNames.random();
// returns 'Ava'

.randomAmount(amount)

.startsWith(letters)
```

## API

### .all

Type: `<Array>`

Returns an array of the top 50 baby names in alphabetical order.

### .random()

Type: `<Function>`

Returns a random baby name.

### .randomAmount(amount)

Type: `<Function>`

Returns an array of corresponding amount of random baby names.

### .startsWith(letters)

Type: `<Function>`

Returns an array of baby-names that start with those letters.

## Related
* [baby-names-cli](#)
* [harrypotter-names](#)
* [harrypotter-spells](#)
