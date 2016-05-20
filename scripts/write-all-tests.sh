#!/usr/bin/env node

var fs    = require('fs');
var glob  = require('glob');
var path  = require('path');

var allTestFiles = glob.sync(__dirname + '/../src/**/*-test.+(ts|tsx)');

var buffer = [`
/**
 * THIS IS AN AUTO-GENERATED FILE.
 *
 * This is the main entry file for executing all test files via Karma. It fixes the issue where
 * Karma creates a new bundle for each test file -- this results in karma consuming > 3 GB of memory.
 * By pointing to this single file, Karma only needs to bundle *one* file, thus reducing memory consumption, speeding up bundling time,
 * and increasing test runner execution time. (CC)
 */
`];


allTestFiles.forEach(function(testFilePath) {

    var relativePath = testFilePath.replace(/^.*?src/, './src');
    buffer.push(`require('${relativePath}');`);
});

var allTestsFilePath = path.resolve(__dirname + '/../all-tests.js');


fs.writeFileSync(allTestsFilePath, buffer.join('\n'));