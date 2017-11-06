var gulp=require('gulp');
var webServer=require('gulp-webserver');
var urlt=require('url');
var fs=require('fs');
gulp.task('webserver',function(){
	gulp.src('.').pipe(webServer({
		port:8080,
		host:'localhost',
		middleware:function(req,res,next){
			var U=urlt.parse(req.url);
			res.setHeader('Access-Control-Allow-Origin','*');
				if(U.pathname==='/index'){
					res.end(fs.readFileSync("data.json"));
				}
		}
	}))
})
var　htmlmin=require("gulp-htmlmin")
var uglify=require("gulp-uglify")
var CsS=require("gulp-minify-css")
gulp.task("yasuohtml",function(){
	gulp.src('./index.html')
		.pipe(htmlmin({
			removeComments:true,
			collapseWhitespace:true,
			removeScriptTypeAttributes:true,
			minifyJs:true,
			minifyCss:true
		}))
		.pipe(gulp.dest("./html"))
})
gulp.task("yasuojs",function(){
	gulp.src("./*.js").pipe(uglify()).pipe(gulp.dest("js"))
})
gulp.task("yasuocss",function(){
	gulp.src("./*.css").pipe(CsS()).pipe(gulp.dest("css"))
})