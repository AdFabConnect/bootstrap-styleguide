module.exports = function(grunt) {
    'use strict';

    var localConfig = grunt.file.readJSON('package.json').localConfig;

    require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        less: {
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'css/style.css.map',
                    sourceMapRootpath: localConfig.host + localConfig.pathname
                },
                files: {
                    'css/style.css': 'less/style.less',
                    'css/bootstrap.css': 'less_bootstrap/bootstrap.less'
                }
            }
        },
        styleguide: {
            options: {
                template: {
                    src: 'styleguide/kss'
                },
                framework: {
                    name: 'kss'
                }
            },
            all: {
                options: {
                    // task options
                },
                files: {
                    'styleguide/bootstrap': 'less_bootstrap/*.less',
                    'styleguide/components': 'less/*.less'
                }
            }
        },
        stylestats: {
            your_target: {
            	src: ['css/*.css']
            },
        },
        watch: {
            all: {
                files: [
                        'less/**/*.less',
                        'less_bootstrap/**/*.less'
                       ],
                tasks: ['less', 'styleguide'],
            }
        }
    });

    grunt.registerTask('default', ['less', 'styleguide', 'watch']);
};
