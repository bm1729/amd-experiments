/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          'sinon': true,
          'define': true,
          'require': true,
          'requirejs': true,
          'describe': true,
          'it': true,
          'expect': true,
          'beforeEach': true,
          'afterEach': true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['src/**/*.js', 'test/**/*.js']
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        options: {
          singleRun: true
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    },
    execute: {
      target: {
        src: ['app.js']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['jshint', 'karma']);
  grunt.registerTask('start', ['execute']);

};
