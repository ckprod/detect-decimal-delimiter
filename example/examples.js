"use strict";

const detectDecimalDelimiter = require('../index.js');

console.log('123,456,789 - ' + detectDecimalDelimiter('123,456,789'));
console.log('123,456,789.12 - ' + detectDecimalDelimiter('123,456,789.12'));
console.log('123 456 - ' + detectDecimalDelimiter('123 456'));
console.log('123?456 - ' + detectDecimalDelimiter('123?456'));
console.log('123\'456 - ' + detectDecimalDelimiter('123\'456'));
console.log('123,456.789 - ' + detectDecimalDelimiter('123,456.789'));
console.log('1.234,45 - ' + detectDecimalDelimiter('1.234,45'));
console.log('1.23 - ' + detectDecimalDelimiter('1.23'));
console.log('1234567.8 - ' + detectDecimalDelimiter('1234567.8'));
console.log('1,2 - ' + detectDecimalDelimiter('1,2'));
console.log('1.234 - ' + detectDecimalDelimiter('1.234'));
console.log('123,456 - ' + detectDecimalDelimiter('123,456'));
console.log('[\'123,456\',\'123,456\',\'123,456\',\'123,456.7\'] - ' + detectDecimalDelimiter(['123,456','123,456','123,456','123,456.7']));
