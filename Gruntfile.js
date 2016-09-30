module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json'),
    uglify: { 
      options: { 
        mangle: false     }, 
        my_target: { 
          files: {         'dest/output.min.js': ['src/js/**.js'] 

        } 
      } 
    }
 });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [‘uglify’]);
}