module.exports = function(grunt) {
  
  // config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          "css/generic-abc.css": [
            "less/generic-abc.less"
          ]
        }
      }
    },
    watch: {
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: [
          'less/*.less'
        ],
        tasks: ['less']
      }
    }
  });

  // plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  // tasks
  grunt.registerTask('default', [ 'less' ]);
  grunt.registerTask('serve', [ 'watch' ]);

};