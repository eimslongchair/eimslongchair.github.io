module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"css/styles.css": "less/styles.less"
				}
			}
		},
		watch: {
			styles: {
				files: ['less/styles.less'],
				tasks: ['less'],
				options: {
					nospawn: true,
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', ['less', 'watch']);
	grunt.loadNpmTasks('grunt-contrib-watch');
};