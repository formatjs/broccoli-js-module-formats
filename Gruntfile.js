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
