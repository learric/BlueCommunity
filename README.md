STATIC WEBSITE BOILERPLATE
Developer: Rick Lear
Version: 1.7.1

** This boilerplate is to begin a static website only and is NOT the ideal template to begin a web application. However, it is built on Express, so it has the foundation to attach web sockets for dynamic functionality. 

** Foundational features of this boilerplate:
>>	Bower: Manage packages
>>	Grunt: Manage tasks
>>	Express: Manage local server connection
>>	Foundation: Responsive site template

** Support features of this boilerplate:
>>	Bower Components:
	>>	Fastclick: Remove click delay on mobile devices
	>>	jQuery:
		>>	Placeholder: Add placeholder to inputs on older browsers
		>>	Cookie: Create and store data in a cookie
	>>	Modernizr: Add modern browser features to older browsers
	
>>	Node Modules:
	>>	grunt-autoprefixer: Add vendor prefixes
	>>	grunt-bower-install: Inject Bower dependencies into HTML
	>>	grunt-bower-task: Automatically run Bower to install dependencies
	>>	grunt-concurrent: Run tasks simultaneously
	>>	grunt-contrib-copy: Copy files & folders to separate places
	>>	grunt-contrib-csslint: Lint CSS after compilation
	>>	grunt-contrib-imagemin: Minify images
	>>	grunt-contrib-jshint: Validate JS files
	>>	grunt-contrib-sass: Compile SASS files
	>>	grunt-contrib-watch: Wait for changes to specific files and run tasks
	>>	grunt-express: Connect to local server and update browser with LiveReload
	>>	grunt-jslint: Lint JS files
	>>	grunt-open: Open browser on grunt serve
	>>	load-grunt-tasks: Automatically load all grunt tasks
	>>	matchdep: Match npm dependecies by name (works with grunt-bower-task)
	>>	node-sass: Libsass

**	To use this boilerplate:
	1.	Make a copy of the folder and its contents or pull from Github
	2.	Install Bower dependencies with : $ bower install
	3.	Install Grunt & node dependencies with: $ npm install
	4.	Build up template with: $ grunt build
	5.	Start Express server to begin live development with: $ grunt serve
		>> As long as everything downloaded and installed correctly, your default browser should open to http://localhost:9000 with the heading "Hello World"

**	Current known bugs:
	>>	In some instances, $ npm install will return errors related to grunt-contrib-imagemin. This will be apparent when running $ grunt build, as it will return an error related to the same script. If this occurs, run: $ npm install grunt-contrib-imagemin --save-dev, then run $ grunt build again.

**	Documented Versions
	>>	1.7.1: Current version
	>>	1.7.0: Made available publicly
	>>	1.3.7: Began production use
	>>	1.0.0: Public API