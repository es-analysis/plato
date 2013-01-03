'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js', '!lib/assets/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    uglify: {
      'assets' : {
        files : {
          'lib/assets/scripts/bundles/core-bundle.js' : [
            'lib/assets/scripts/vendor/jquery-1.8.3.min.js',
            'lib/assets/scripts/vendor/lodash.min.js',
            'lib/assets/scripts/vendor/raphael-min.js',
            'lib/assets/scripts/vendor/morris.min.js',
            'lib/assets/scripts/vendor/jquery.fittext.js',
            'lib/assets/scripts/vendor/bootstrap-tooltip.js',
            'lib/assets/scripts/vendor/bootstrap-popover.js'
          ],
          'lib/assets/scripts/bundles/codemirror.js' : [
            'lib/assets/scripts/vendor/codemirror/codemirror.js',
            'lib/assets/scripts/vendor/codemirror/javascript.js',
            'lib/assets/scripts/vendor/codemirror/util/searchcursor.js'
          ]
        }
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('optimize', ['uglify']);
  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
