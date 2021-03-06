/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', './*.js', 'test/**/*.js']
    },
    watch: {
      files: ['./*.coffee'],
      tasks: ['coffee', 'jshint']
    },
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
        boss: true,
        eqnull: true
      },
      globals: {
        jQuery: true,
        require: true,
        module: true,
        process: true
      }
    },
    coffee: {
      compile: {
        files: {
          './hubot-unfuddle.js': './hubot-unfuddle.coffee'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task.
  grunt.registerTask('default', ['coffee', 'jshint']);

};
