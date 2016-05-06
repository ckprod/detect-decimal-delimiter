'use strict';

const assert = require('assert');
const detectDecimalDelimiter = require('../index.js');

let CORE_TESTS = [
	{
		description: '123,456,789 => .',
		input: '123,456,789',
		expected: '.'
	},
	{
		description: '123,456,789.12 => .',
		input: '123,456,789.12',
		expected: '.'
	},
	{
		description: '123 456 => ,',
		input: '123 456',
		expected: ','
	},
	{
		description: '123،456 => .',
		input: '123،456',
		expected: '.'
	},

	{
		description: '123\'456 => .',
		input: '123\'456',
		expected: '.'
	},
	{
		description: '123,456.789 => .',
		input: '123,456.789',
		expected: '.'
	},
	{
		description: '1.234,45 => ,',
		input: '1.234,45',
		expected: ','
	},
	
	{
		description: '1.23 => .',
		input: '1.23',
		expected: '.'
	},
	{
		description: '1234567.8 => .',
		input: '1234567.8',
		expected: '.'
	},
	{
		description: '1,2 => ,',
		input: '1,2',
		expected: ','
	},

	{
		description: '1.234 => ambiguous',
		input: '1.234',
		expected: 'ambiguous'
	},
	{
		description: '123,456 => ambiguous',
		input: '123,456',
		expected: 'ambiguous'
	},
	{
		description: 'array: [\'123,456\',\'123,456\',\'123,456\',\'123,456.7\'] => .',
		input: ['123,456','123,456','123,456','123,456.7'],
		expected: '.'
	},
	{
		description: 'nested array: [\'123,456\',[\'123,456\',\'123,456\',[\'123,456\',\'123,456.7\'],\'123,456.7\'],\'123,456\',\'123,456.7\'] => .',
		input: ['123,456',['123,456','123,456',['123,456','123,456','123,456','123,456.7'],'123,456.7'],'123,456','123,456.7'],
		expected: '.'
	}
]

describe('tests (detect decimal delimiter)', function() {
    for (let i = 0; i < CORE_TESTS.length; i++) {
        let test = CORE_TESTS[i];
        it(test.description, function() {
            let guess = detectDecimalDelimiter(test.input);
            assert.deepEqual(guess, test.expected);
        });
    }
});

