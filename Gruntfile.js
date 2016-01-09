'use strict';

module.exports = function(grunt) {

	// Load Grunt tasks declared in the package.json file
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

	// watch tasks
		watch: {
			bower: {
				files: ['bower.json'],
				tasks: ['bowerInstall'],
				options: {
					livereload: true
				}
			},
			gruntfile: {
				files: ['Gruntfile.js'],
				tasks: ['jshint']
			},
			jshint: {
				files: ['js/app.js'],
				tasks: ['jshint']
			},
			copy: {
				files: ['*.html', 'js/app.js', 'images/**/*', 'bower.json'],
				tasks: ['newer:copy:dev'],
				options: {
					livereload: true
				}
			},
			sass: {
				files: ['scss/**/*.scss'],
				tasks: ['newer:sass:dev', 'sass:dist', 'copy:dist'],
				options: {
					livereload: true
				}
			},
			livereload: {
				options: {
					livereload: true
				},
				files: ['live/**/**/**/*']
			}
		},

	// start server
		express: {
			all: {
				options: {
					port: 9000,
					hostname: '0.0.0.0',
					bases: ['live'],
					livereload: true
				}
			}
		},

	// open browser
		open: {
			all: {
				path: 'http://localhost:<%= express.all.options.port%>'
			}
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			dev: [
				'Gruntfile.js',
				'js/*.js'
			]
		},

	// start tasks
		// compile sass
		sass: {
			options: {
				loadPath: ['bower_components/foundation/scss']
			},
			dev: {
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['**/*.scss'],
					dest: 'css',
					ext: '.css',
					options: {
						style: 'expanded'
					}
				}]
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['app.scss'],
					dest: 'css',
					ext: '.css',
					options: {
						style: 'expanded'
					}
				}]
			}
		},

		// Automatically inject Bower components into the HTML file
		bowerInstall: {
			app: {
				src: ['*.html']
			}
		},

		// The following *-min tasks produce minified files in the dist folder
		imagemin: {
			dev: {
				files: [{
					expand: true,
					cwd: 'images',
					src: '**/*.{gif,jpeg,jpg,png}',
					dest: 'live/images'
				}]
			}
		},

		svgmin: {
			dev: {
				files: [{
					expand: true,
					cwd: 'images',
					src: '**/*.svg',
					dest: 'live/images'
				}]
			}
		},

		// copy files to live - triggers server update
		copy: {
			dev: {
				files: [{
					expand:true,
					src: ['*.html', 'js/*.js', 'images/**/*', 'bower_components/**/**/**/*'],
					dest: 'live/'
				}]
			},
			dist: {
				files: [{
					expand:true,
					cwd: 'css',
					src: ['app.css'],
					dest: 'live/css'
				}],
				options: {
					livereload: true
				}
			}
		},

		// Run some tasks in parallel to speed up build process
		concurrent: {
			build: {
				tasks: [
					'newer:sass:dev',
					'newer:imagemin:dev',
					'newer:svgmin:dev',
					'bowerInstall:app'
				]
			}
		}

	});

	grunt.registerTask('serve', [
		'build',
		'express',
		'open',
		'watch'
	]);
	grunt.registerTask('build', [
		'concurrent:build',
		'newer:copy:dev',
		'copy:dist'
	]);
};