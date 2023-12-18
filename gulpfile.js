const {series,src,dest,watch} = require('gulp');
const sass= require('gulp-sass')(require('sass'));
const imagemin= require('gulp-imagemin');
const notify= require('gulp-notify');
const webp= require('gulp-webp');
const gulpConcat= require('gulp-concat');

//UTILIDADES CSS//
const autoprefixer= require('autoprefixer');
const postcss= require('gulp-postcss');
const cssnano= require('cssnano')


//FUNCION PARA COMPILAR SASS//
function css(){
    return src('./src/scss/app.scss')
        .pipe(sass({}))
        .pipe(dest('./build/css'))
        .pipe( postcss([autoprefixer(), cssnano()]) )
        .pipe(notify({message:'Archivo Compilado'}))
}

//OPTIMIZAR CSS//
function optimizarCSS(){
    return src('./src/scss/app.scss')
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(dest('./build/css'))
        .pipe(notify({message:'Archivo Compilado y Optimizado'}))
}

function javascript(){
    return src('./src/js/**/*.js')
        .pipe( gulpConcat('bundle.js'))
        .pipe(dest('./build/js'))
}

//CONTROLAR ARCHIVOS//
function watchFiles(){                          //===Controla si se realiza algún cambio en el SCSS=== //
    watch('./src/scss/**/*.scss', css);
    watch('./src/js/**/*.js', javascript);
}

function imagenes(){
    return src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
}

function formatoWebp(){
    return src('./src/img/**/*')
        .pipe(webp())
        .pipe(dest('./build/img'))
}

exports.optimizarCSS=optimizarCSS;


exports.default= series(css, javascript, imagenes, formatoWebp, watchFiles)
