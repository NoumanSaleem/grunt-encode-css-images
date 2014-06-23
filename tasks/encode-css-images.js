/*
 * grunt-encode-inline-images
 *
 *
 * Copyright (c) 2014 Nouman Saleem
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
  var encode = require('../lib/encodeCSSImages')(grunt);

  grunt.registerMultiTask('encode-css-images', 'The best Grunt plugin ever.', function() {
    var options = this.options({
      imageDir: ''
    });

    this.files.forEach (function (f) {
      var modified = f.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        return encode(filepath, options);
      }).join('');

      grunt.file.write(f.dest, modified);
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
