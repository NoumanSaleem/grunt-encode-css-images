var fs = require('fs'),
    format = require('util').format,
    path = require('path'),
    mime = require('mime'),
    match = /(?:url\()['"]?(\S+?(?:svg|png|jpe?g))['"]?\)/gmi;

module.exports = function (grunt) {
  return function (srcPath, options) {
    return fs.readFileSync(srcPath, { encoding: 'utf8' }).replace(match, function (match, $1) {
        var filePath = '/' === $1.charAt(0) ? path.join(options.imageDir, $1) : path.resolve(srcPath, $1);

        if (!grunt.file.exists(filePath)) {
          grunt.log.warn(format('Image %s not found at %s', $1, filePath));
          return match;
        }

        return match.replace($1, format('\'data:%s;base64,%s\'', mime.lookup(filePath), fs.readFileSync(filePath).toString('base64')));
    });
  };
};
