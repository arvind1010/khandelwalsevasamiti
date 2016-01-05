var path = require('path');

var stylesheetsDir = 'assets/stylesheets';
var rendrDir = 'node_modules/rendr';
var rendrHandlebarsDir = 'node_modules/rendr-handlebars';
var rendrModulesDir = rendrDir + '/node_modules';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
      compile: {
        options: {
          namespace: false,
          commonjs: true,
          processName: function(filename) {
            return filename.replace('app/templates/', '').replace('.hbs', '');
          }
        },
        src: "app/templates/**/*.hbs",
        dest: "app/templates/compiledTemplates.js",
        filter: function(filepath) {
          var filename = path.basename(filepath);
          // Exclude files that begin with '__' from being sent to the client,
          // i.e. __layout.hbs.
          return filename.slice(0, 2) !== '__';
        }
      }
    },

    less: {
      development: {
        options: {
          paths: [
            'assets/less/bootstrap-3.1.1'
            //'assets/less/generic-abc'
          ]
        },
        files: {
          'public/css/ourstrap.css': 'assets/less/bootstrap-3.1.1/bootstrap.less'
          //'public/css/site.css': 'assets/less/generic-abc/generic-abc.less'
        }
      }
    },

    watch: {
      scripts: {
        files: 'app/**/*.js',
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      },
      templates: {
        files: 'app/**/*.hbs',
        tasks: ['handlebars'],
        options: {
          interrupt: true
        }
      },
      less: {
        files: [ 'assets/less/*.less', 'assets/less/**/*.less' ],
        tasks: [ 'less' ],
        options: {
          interrupt: true
        }
      }
    },

    concat: {
      vendor: {
        src: [
          'assets/vendor/jquery-2.0.3.js',
          'assets/vendor/bootstrap.js',
          'assets/vendor/jquery.unveil.js', 
          'assets/vendor/masonry.js',
          'assets/vendor/imagesloaded.js',
          'assets/vendor/rivets.js',
          'assets/vendor/jquery.zoom.js'
          //'assets/vendor/webstore.2-tmp.js'
        ],
        dest: 'public/vendor.js',
      }
    },

    browserify: {
      options: {
        debug: true,
        alias: [
          'node_modules/rendr-handlebars/index.js:rendr-handlebars'
        ],
        aliasMappings: [{
          cwd: 'app/',
          src: [ '**/*.js' ],
          dest: 'app/'
        }],
        external: [ 'jquery' ]
      },
      app: {
        src: [
          // list vendor deps here
          // 'assets/vendor/rivets.js',
          // 'assets/vendor/bootstrap.js',
          'app/**/*.js'
        ],
        dest: 'public/site.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('runNode', function () {
    grunt.util.spawn({
      cmd: 'node',
      args: ['./node_modules/nodemon/bin/nodemon.js', 'index.js'],
      opts: {
        stdio: 'inherit'
      }
    }, function () {
      grunt.fail.fatal(new Error("nodemon quit"));
    });
  });

  grunt.registerTask('compile', [ 'handlebars', 'concat', 'browserify', 'less' ]);
  grunt.registerTask('dev', [ 'handlebars', 'browserify', 'less' ]);

  // Run the server and watch for file changes
  grunt.registerTask('server', [ 'runNode', 'dev', 'watch' ]);

  // Default task(s).
  grunt.registerTask('default', [ 'compile' ]);
};