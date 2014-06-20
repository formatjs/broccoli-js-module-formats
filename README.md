broccoli-js-module-formats
==========================

[![Build Status](https://travis-ci.org/yahoo/broccoli-js-module-formats.svg?branch=master)](https://travis-ci.org/yahoo/broccoli-js-module-formats)
[![Dependency Status](https://gemnasium.com/yahoo/broccoli-js-module-formats.svg)](https://gemnasium.com/yahoo/broccoli-js-module-formats)
[![NPM version](https://badge.fury.io/js/broccoli-js-module-formats.svg)](http://badge.fury.io/js/broccoli-js-module-formats)

Broccoli plugin for obtaining files that use a particular module system.

Limitations
-----------

ES modules without import or export statements will not be detected.

API
---

### pickModules(inputTree, options)

Generates a JSON file with the dependency information for all the files in the
`inputTree`. Options:

  * **type**: Required. Module format to filter files by. Any of `cjs`, `amd`, `es` or `yui`.

Example
-------

```js
var pickModules = require('broccoli-js-module-formats');

var es6Modules = pickModules('./src/', {
    type: 'es'
});
```

License
-------

This software is free to use under the Yahoo Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.

Contribute
----------

See the [CONTRIBUTING file][] for info.


[CONTRIBUTING file]: https://github.com/yahoo/broccoli-js-module-formats/blob/master/CONTRIBUTING.md
[LICENSE file]: https://github.com/yahoo/broccoli-js-module-formats/blob/master/LICENSE.md
