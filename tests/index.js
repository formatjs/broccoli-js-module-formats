/*
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/yahoo/broccoli-js-module-formats/blob/master/LICENSE.md
*/
var expect = require('chai').expect,
    path   = require('path'),
    fs     = require('fs');

function readdir(dir) {
    return fs.readdirSync(path.join(__dirname, 'compare/', dir));
}

describe('module format plugin', function () {
    describe('should generate a folder with only modules with format', function () {
        specify('amd', function () {
            expect(readdir('actual/amd/'))
                .to.deep.equal(readdir('expected/amd/'));
        });
        specify('cjs', function () {
            expect(readdir('actual/cjs/'))
                .to.deep.equal(readdir('expected/cjs/'));
        });
        specify('es', function () {
            expect(readdir('actual/es/'))
                .to.deep.equal(readdir('expected/es/'));
        });
        specify('yui', function () {
            expect(readdir('actual/yui/'))
                .to.deep.equal(readdir('expected/yui/'));
        });
    });
});
