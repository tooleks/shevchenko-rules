"use strict";

var fs = require("fs");
var gulp = require("gulp");

gulp.task("build", function () {
    var rules = [];
    // Load and concatenate all rules from rules directory.
    fs.readdirSync("./rules").forEach(function (file) {
        rules = rules.concat(require("./rules/" + file));
    });
    // Sort rules by priority descending.
    rules.sort(function (firstRule, secondRule) {
        return secondRule.priority - firstRule.priority;
    });
    // Write rules into single file.
    fs.writeFile("./dist/rules.json", JSON.stringify(rules), function (error) {
        if (error) {
            throw error;
        }
    });
});
