"use strict";

const fs = require("fs");
const gulp = require("gulp");
const replace = require("gulp-replace");
const macro = require("./macro");

gulp.task("build", () => {
    let rules = [];
    // Load and concatenate all rules from rules directory.
    fs.readdirSync("./rules/").forEach((file) => rules = rules.concat(require("./rules/" + file)));
    // Sort rules by priority descending.
    rules.sort((firstRule, secondRule) => secondRule.priority - firstRule.priority);
    // Write rules into single file.
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
