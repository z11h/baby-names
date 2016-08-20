# baby-names
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
```

## API

### .all

Type: `<Array>`

Returns an array of the top 50 baby names in alphabetical order.

### .random()

Type: `<Function>`

Returns a random baby name.

## Related
* [baby-names-cli](#)
* [harrypotter-names](#)
