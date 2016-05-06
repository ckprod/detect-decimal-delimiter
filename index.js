;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () {
    'use strict';

    // https://github.com/jonschlinkert/arr-flatten
    function flat(arr, res) {
        var len = arr.length;
        var i = -1;

        while (len--) {
            var cur = arr[++i];
            if (Array.isArray(cur)) {
                flat(cur, res);
            } else {
                res.push(cur);
            }
        }
        return res;
    }

    // data ... string or array of strings containing formatted numbers, etc.
    function detectDecimalDelimiter(data) {
        if (Array.isArray(data)) {
            data = flat(data, []);
            
            for (let i = 0; i < data.length; i++) {
                let input = data[i];
                let decimal = _detectDecimalDelimiter(input);
                if (decimal !== 'ambiguous') return decimal;
            }
			
			return 'ambiguous';
        }
        
        return _detectDecimalDelimiter(data)
    }

    function _detectDecimalDelimiter(input) {
        input = input.trim();

        let c = input.split(',').length - 1;

        if (c > 1) return '.'; // '123,456,789' or '123,456,789.12'
        if (input.indexOf(' ') >= 0) return ','; // '123 456'
        if (input.indexOf('،') >= 0) return '.'; // '123،456'
        if (input.indexOf('\'') >= 0) return '.'; // '123\'456'

        let d = input.split('.').length - 1;
        if (c === 1 && d === 1) { // '123,456.789' or '1.234,45'
            let ci = input.lastIndexOf(',');
            let di = input.lastIndexOf('.');
            if (di > ci) return '.';
            else return ',';
        }

        if (c + d === 1) {
            let ci = input.indexOf(',');
            let di = input.indexOf('.');
            let len = input.length;

            if (ci !== -1 && len - ci !== 4) return ',';
            if (di !== -1 && len - di !== 4) return '.';
        }

        return 'ambiguous';
    }
    
    return detectDecimalDelimiter;
}));

