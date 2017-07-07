var gulp            = require("gulp");
var browserSync     = require("browser-sync").create();
var sass            = require("gulp-sass");
var sourcemaps      = require('gulp-sourcemaps');
var uglify          = require('gulp-uglify');
var pump            = require('pump');


gulp.task("serve", ["sass", "js"], function() {
    browserSync.init({        
		proxy: "http://localhost/mult-site/app/"		
    });
    
    gulp.watch("./app/assets/css/scss/**/*.scss", ["sass"]);
    gulp.watch("./app/assets/js/*.js", ["js"]);
    gulp.watch(['./app/**/*.php', './app/assets/js/*.js']).on("change", browserSync.reload);
});


// CSS
gulp.task("sass", function() {
    return gulp.src("./app/assets/css/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./app/assets/css"))
        .pipe(browserSync.stream());
});

// JS
gulp.task('js', function(cb) {
    pump([
            gulp.src("./app/assets/js/*.js"),
            uglify(),
            gulp.dest('./app/assets/js/min')
        ],
        cb
    );
});

gulp.task('default', ['serve']);
