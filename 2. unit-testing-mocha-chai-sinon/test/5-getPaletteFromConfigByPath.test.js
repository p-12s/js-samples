var getPalette = require('../lib/getPaletteFromConfigByPath');
var expect = require('chai').expect;

describe('getPaletteFromConfigByPath', function() {

    it('should throw an error if the result is not an array',
        function(done) {

            var notArray = function() {
                var a = getPalette(
                    process.cwd() +
                    '/test/fixtures/config-palette-non-array.json');
            };
            expect(notArray).to.throw(/is not an array/);
            done();
        }
    );

    it('should return an array with 3 items by default',
        function() {
            var palette = getPalette();

            expect(palette).to.be.an('array').with.length(3);
        }
    );
});
