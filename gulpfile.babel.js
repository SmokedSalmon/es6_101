import { series, parallel } from 'gulp';
import  { src, dest, watch } from 'gulp';
import babel from 'gulp-babel';
import path from 'path';

const config = {
    es5_file_dest: '*_es5.js',
    es6_101_sr: './es6_101/*_es6.js'
};

function test () {
    return src('test.js')
    .pipe(dest('./test.compiled.js'));
}

function es6_compare () {
    return src(config.es6_101_sr)
    .pipe(babel())
    .pipe(dest('./es6_101/transpiled'));
}

export const learn_es6 = function () {
    const es6_watcher = watch(config.es6_101_sr);

    es6_watcher.on('change', es6_compare);
};

export const learn_es6_2 = series(es6_compare, function () {
    const es6_watcher = watch(config.es6_101_sr);

    es6_watcher.on('change', es6_compare);
});