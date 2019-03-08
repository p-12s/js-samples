var getPalette = require('../lib/getPalette');
var assert = require('assert');

describe('getPalette', function() {

    it('should throw an error if the result is not an array', function() {
        assert.throws(function(){
            getPalette()
        }, /Palette is not an array/);
    });

    it('should return an array with 3 items', function() {
        var palette = getPalette();

        assert(Array.isArray(palette));
        assert.equal(palette.length, 3);
    });
});
