# detect-decimal-delimiter

[![Build Status](https://travis-ci.org/irhc/detect-decimal-delimiter.png?branch=master)](https://travis-ci.org/irhc/detect-decimal-delimiter)

Detect decimal delimiter of formatted numbers. The input can be a string of a well formatted number or a (nested) array of strings.

###Usage

```html
// A simple echo program:
var detectDecimalDelimiter = require('detect-decimal-delimiter');

// input can be a string
console.log(detectDecimalDelimiter('1,234.567'));
// or any array
console.log(detectDecimalDelimiter(['1,234.567']));
```

###Node.js Installation

```html
npm install detect-decimal-delimiter
```
Current version should work with Node.js version 4.0 and above.

###Description

Generally, finding the decimal delimiter of a formatted number is not possible. Take for example the numbers '123,456' and '456.789', either seperator (',' or '.') can be the decimal delimiter.
But there are many formatted numbers where the decimal delimiter can be identified correctly, e.g. '123,456,789', '1234.56' or '12,345.6'. If we have a bunch of homogen data (like a csv file), 
there is a chance of automatically finding the decimal delimiter.

According to languages.js from numbro (https://github.com/foretagsplatsen/numbro) the following combinations of possible delimiters do exist:
- ' ' and ',' e.g. hu-HU
- '.' and ',' e.g. de-DE
- ',' and '.' e.g. en-GB
- '،' and '.' e.g. fa-IR
- '\'' and  '.' e.g. fr-CH

The list shows that there are only two possibilities for the decimal delimiter: ',' and '.'.

If the decimal delimiter cannot be identified, the function will return 'ambiguous'.
The function will process the input until the first definite answer can be given.

###References

This small javascript component uses [arr-flatten](https://github.com/jonschlinkert/arr-flatten) from Jon Schlinkert for the flattening of arrays.

### Licence

MIT


