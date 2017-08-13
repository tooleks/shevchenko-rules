"use strict";

const fs = require("fs");
const gulp = require("gulp");
const replace = require("gulp-replace");
const macro = require("./macro");

gulp.task("build", () => {
    let rules = [];
    fs.readdirSync("./src/").forEach((file) => rules = rules.concat(require("./src/" + file)));
    rules.sort((firstRule, secondRule) => secondRule.priority - firstRule.priority);
    fs.writeFile("./dist/rules.json", JSON.stringify(rules), (error) => {
        if (error) throw error;
        gulp.start("replace:macro");
    });
});

gulp.task("replace:macro", () => {
    const task = gulp.src(["./dist/**/*.json"]);
    for (let macroName in macro) {
        if (macro.hasOwnProperty(macroName)) {
            task.pipe(replace(macroName, macro[macroName]));
        }
    }
    task.pipe(gulp.dest("./dist/"));
});
