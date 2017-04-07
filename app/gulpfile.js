// @name:'gulpfile.js'
// @author:'lxchuan12@163.com'
// @time:'2017.04.06'

// 可参考：[聂微东-gulp使用小结(一)](http://www.cnblogs.com/Darren_code/p/gulp.html)

// 引入gulp
var gulp = require('gulp'),
	// 使用gulp-load-plugins管理插件,不需要一一引入
	$    = require('gulp-load-plugins')(),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;
var amdOptimize = require('amd-optimize');

// 路径
var app = {
	srcPath:'./src/',
	devPath:'./build/',
	prdPath:'./dist/'
};

// html
gulp.task('html',function(){
	gulp.src(app.srcPath+'**/*.html')
		.pipe(gulp.dest(app.devPath))
		.pipe($.htmlmin())
        .pipe(gulp.dest(app.prdPath))
        .pipe(reload({stream:true}));
});

// less
gulp.task('less',function(){
	gulp.src(app.srcPath+'style/all.less')
		.pipe($.plumber())
		.pipe($.less())
		.pipe(gulp.dest(app.devPath+'css'))
		.pipe($.cleanCss())
		// .pipe($.rename('all.min.css'))
		.pipe(gulp.dest(app.prdPath+'css'))
		.pipe(reload({stream:true}));
});

// vendor
gulp.task('vendor',function(){
	gulp.src(app.srcPath+'vendor/**/*.js')
		.pipe($.plumber())
		.pipe(gulp.dest(app.devPath+'vendor'))
		.pipe(gulp.dest(app.prdPath+'vendor'))
		.pipe(reload({stream:true}));
});

// js
gulp.task('js',function(){
	gulp.src(app.srcPath+'js/**/*.js')
		.pipe($.plumber())
        // TO DO压缩合并优化requirejs代码
		.pipe(amdOptimize(app.srcPath+'js/index')) // 主文件入口
		.pipe($.concat('index.js'))
        // .pipe($.concat(app.devPath+'js'))
		.pipe(gulp.dest(app.devPath+'js'))
		.pipe($.uglify())
		// .pipe($.rename('main.min.js'))
		.pipe(gulp.dest(app.prdPath+'js'))
		.pipe(reload({stream:true}));
});

// image
gulp.task('image',function(){
	gulp.src(app.srcPath+'img/**/*')
		.pipe($.plumber())
		.pipe(gulp.dest(app.devPath+'img'))
		.pipe($.imagemin())
		.pipe(gulp.dest(app.prdPath+'img'))
		.pipe(reload({stream:true}))
});

// build
gulp.task('build',['html','less','vendor','js','image'],function(){
	console.log('run build task!');
});

// clean
gulp.task('clean',function(){
	gulp.src([app.devPath,app.prdPath])
		.pipe($.clean());
});

// 静态服务器 // gulp和browsersync配合参考：http://www.browsersync.cn/docs/gulp/
gulp.task('server',['build'], function(){
	browserSync.init({
		server:{
			baseDir:app.devPath
		},
		port:9200
	});
    gulp.watch(app.srcPath+'**/*.html',['html']);
    gulp.watch(app.srcPath+'style/**/*.less',['less']);
    gulp.watch(app.srcPath+'vendor/**/*.js',['vendor']);
    gulp.watch(app.srcPath+'js/**/*.js',['js']);
    gulp.watch(app.srcPath+'img/**/*',['image']);
});

/*
// 代理
gulp.task('browser-sync',function(){
	browserSync.init({
		proxy:'你的域名或IP'
	})
});
*/

gulp.task('default', ['server'], function(){
	console.log('run default task!');
});