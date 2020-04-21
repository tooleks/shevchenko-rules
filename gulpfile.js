'use strict';

const util = require('util');
const fs = require('fs');
const gulp = require('gulp');
const replace = require('gulp-replace');
const macro = require('./macro');

const readdirAsync = util.promisify(fs.readdir);
const writeFileAsync = util.promisify(fs.writeFile);

gulp.task('bundle:rules', async () => {
  const fileNames = await readdirAsync('./src');
  // Concatenate all rules into a single array.
  const rules = fileNames
    .reduce((rules, fileName) => rules.concat(require('./src/' + fileName)), [])
    .sort((firstRule, secondRule) => secondRule.priority - firstRule.priority);
  await writeFileAsync('./dist/rules.json', JSON.stringify(rules, null, 2));
});

gulp.task('replace:macro', () => {
  const task = gulp.src('./dist/**/*.json');
  // Replace all macro expressions in destination files.
  Object.getOwnPropertyNames(macro).forEach((macroName) => {
    task.pipe(replace(macroName, macro[macroName]));
  });
  return task.pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series('bundle:rules', 'replace:macro'));
