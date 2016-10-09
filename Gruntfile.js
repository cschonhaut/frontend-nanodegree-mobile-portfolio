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
    } ,
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-critical');
  //grunt.loadNpmTasks('grunt-responsive-images-converter');
  grunt.registerTask('default', ['uglify', 'cssmin']);
 };

// <<<<<<< 3c5a36a59d0ce6c388a81c21a2ae3c52ecdef6e5
//   // Load the plugins
// =======
// >>>>>>> Changed grunt file and moved async
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//   grunt.loadNpmTasks('grunt-responsive-images');

// <<<<<<< 3c5a36a59d0ce6c388a81c21a2ae3c52ecdef6e5
//   // Default task(s).
//   grunt.registerTask('default', ['uglify']);
//   grunt.registerTask('default', ['grunt-responsive-images']);

// };
// =======
// }
// >>>>>>> Changed grunt file and moved async
