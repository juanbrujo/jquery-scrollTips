module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("scrollTips.jquery.json"),
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  By: <%= pkg.author.name %> |  <%= pkg.author.twitter %>\n" +
				" *  License: <%= pkg.licenses[0].type %>\n" +
				" */\n"
		},
		concat: {
			dist: {
				src: ["src/jquery.scrollTips.js"],
				dest: "dist/jquery.scrollTips.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		jshint: {
			files: ["src/jquery.scrollTips.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		uglify: {
			my_target: {
				src: ["src/jquery.scrollTips.js"],
				dest: "dist/jquery.scrollTips.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		less: {
	      dist: {
	      	options: {
	      		banner: "<%= meta.banner %>",
	      		compress: true
	      	},
	        files: {
	            'demo/css/style.min.css': 'demo/css/style.less',
	            'dist/jquery.scrollTips.min.css': 'src/jquery.scrollTips.less'
	        }
	      } 
	    },
		watch: {
		    scripts: {
				files: ['src/*.js'],
				tasks: ['concat'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['**/*.less'],
				tasks: ['less'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['demo/*.html'],
			},
		    tasks: ['default']
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint", "concat", "uglify"]);
	grunt.registerTask("travis", ["jshint"]);

};
