module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
          files:{
            'dest/output.min.js': ['src/js/**.js'],
          }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        expand: true
      },
      target: {
        files: {
          'dest/output.min.css': ['src/css/**.css']
        }
      }
    },
    critical: {
      dest: {
    options: {
      base: './'
        },
    src: 'index.html',
    dest: 'result.html'
      }
    },
    imagemin: {
      dest: {
      options: {
        optimizationLevel: 5
      },
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
    }
}
  });

// Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-critical');
  //grunt.loadNpmTasks('critical');
  //grunt.loadNpmTasks('grunt-responsive-images-converter');
  grunt.registerTask('default', ['uglify', 'cssmin']);
};

