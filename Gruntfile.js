/*
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/yahoo/broccoli-js-module-formats/blob/master/LICENSE.md
*/
module.exports = function (grunt) {
    grunt.initConfig({
        broccoli_build: {
            build: {
                dest: 'tests/compare/actual/'
            }
        },

        clean: {
            build: 'tests/compare/actual/',
            tmp  : 'tmp/'
        }
    });

    grunt.loadNpmTasks('grunt-broccoli-build');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['clean', 'broccoli_build', 'clean:tmp']);
    grunt.registerTask('default', ['build']);
};
