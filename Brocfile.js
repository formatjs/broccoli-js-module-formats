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
