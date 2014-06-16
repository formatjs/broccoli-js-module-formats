var Writer       = require('broccoli-writer'),
    walkSync     = require('walk-sync'),
    path         = require('path'),
    fs           = require('fs'),
    mkdirp       = require('mkdirp'),
    util         = require('util'),
    moduleFormat = require('js-module-formats').detect,
    helpers      = require('broccoli-kitchen-sink-helpers');

module.exports = ESModuleFilter;

// -----------------------------------------------------------------------------

function ESModuleFilter(inputTree, options) {
    if (!(this instanceof ESModuleFilter)) {
        return new ESModuleFilter(inputTree, options);
    }
    options = options || {};

    this.inputTree = inputTree;
    this.type      = options.type;
    this._cache    = {};
}
util.inherits(ESModuleFilter, Writer);

ESModuleFilter.prototype.write = function (readTree, destDir) {
    var cache        = this._cache,
        expectedType = this.type;

    return readTree(this.inputTree).then(function (srcDir) {
        var jsFiles = walkSync(srcDir).filter(function (relPath) {
            return path.extname(relPath) === '.js';
        });

        jsFiles.forEach(function (relPath) {
            var cacheEntry = cache[relPath],
                srcPath    = path.join(srcDir, relPath),
                statsHash  = helpers.hashTree(srcPath),
                type;

            if (cacheEntry && cacheEntry.statsHash === statsHash) {
                type = cacheEntry.type;
            } else {
                type = moduleFormat(fs.readFileSync(srcPath, 'utf8'));

                cache[relPath] = {
                    type: type,
                    statsHash: statsHash
                };
            }

            if (type === expectedType) {
                mkdirp.sync(path.join(destDir, path.dirname(relPath)));
                helpers.copyPreserveSync(srcPath, path.join(destDir, relPath));
            }
        });
    });
};
