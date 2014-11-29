'use strict';

// import packages
var gulp        = require('gulp');
var notify      = require('gulp-notify');
var jshint      = require('gulp-jshint');
var sass        = require('gulp-sass');
var nodemon     = require('gulp-nodemon');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var filter      = require('gulp-filter');
var clean       = require('gulp-clean');
var ngAnnotate = require('gulp-ng-annotate');

var path = require('path');



var paths = {
    server: {
        js: './server/**/*.js',
        start: 'server/app.js'
    },
    client: {
        app: './public/dev/js/**/*.js',
        sass: './public/dev/sass/**/*.scss',
        css: './public/build',
        js: [
            './public/dev/lib/angular/angular.js',
            './public/dev/lib/angular-route/anugular-route.js',
            './public/dev/lib/angular-bootstrap/ui-bootstrap-tpls.js',
            './public/dev/js/**/*.js'
        ]
    },
    build: './public/build'
}


gulp.task('server-lint', function () {
    lint(paths.server.js);
});

gulp.task('client-lint', function () {
    lint(paths.app.js);
});
/**
 * compile SASS
 */
gulp.task('sass', function () {
    return gulp.src(paths.client.sass)
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(paths.build))
        .pipe(filter('**/*.css')) // Filtering stream to only css files
        .pipe(browserSync.reload({stream:true}));
});

/**
 * concat and minify all javascript files
 */
gulp.task('build', ['clean', 'js', 'sass'],function() {

});

gulp.task('clean', function () {
    return gulp.src(paths.build)
            .pipe(clean());
});

gulp.task('js', function () {
    return gulp.src(paths.client.app)
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(paths.build));
});

gulp.task('ng-annotate', function () {
    return gulp.src(paths.client.app)
        .pipe(ngAnnotate())
        .pipe(gulp.dest('.'));
});


/**
 * Gulp task for running dev tools for server
 */
gulp.task('server-dev', function() {
    nodemon({
        script: paths.server.start,
        ext: 'html js',
        ignore: ['ignored.js']
    })
    .on('change', ['server-lint'])
    .on('restart', function () {
      console.log('restarted!');
    })
});

/**
 * Gulp task for running dev tools for client
 * lint JS, compile JS, compile SASS etc
 */
gulp.task('client-dev', ['browser-sync'],  function() {
  gulp.watch([paths.client.app], ['client-lint']);
  gulp.watch([paths.client.sass], ['sass']);
});

/**
 * run browser sync to inject css after sass complete
 *
 */
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["./public/build/main.css"],
        browser: "google chrome",
        port: 7000,
    });
});


function lint (src) {
    return gulp.src(src)
        .pipe(jshint('./.jshintrc'))
        .pipe(notify({
            onLast: true,
            message: function (file) {
                if (file.jshint.success) {
                  // Don't show something if success
                  return false;
                }

                // create a string that contains error details
                var errors = file.jshint.results.map(function (data) {
                  if (data.error) {
                    return "line " + data.error.line + ' : ' +  data.error.reason;
                  }
                }).join("\n"); // join error messages with a new line

                return errors;
            },
            title: function (file) {
                return 'File : ' + file.relative;
            },
            sound: "Submarine",
            icon: path.join(__dirname, "gulp.png")
        }));
}
