/*
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/yahoo/broccoli-js-module-formats/blob/master/LICENSE.md
*/
var pickModules = require('./lib/index'),
    pickFiles   = require('broccoli-static-compiler'),
    mergeTrees  = require('broccoli-merge-trees');

var trees = ['cjs', 'amd', 'es', 'yui'].map(function (type) {
    var tree =  pickModules('tests/compare/source/', {
        type: type
    });

    return pickFiles(tree, {
        srcDir: './',
        destDir: type + '/'
    });
});

module.exports = mergeTrees(trees);
