# grunt-encode-css-images

> Replace references to images in CSS with Base64 encoding of source image.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-encode-css-images --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-encode-css-images');
```

## The "encode-css-images" task

### Overview
In your project's Gruntfile, add a section named `encode-css-images` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  encode-css-images: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.imageDir
Type: `String`
Default value: `''`

A string value that is joined to absolute image file paths.

Ex:

```css
.myIcon { background-image: url(/images/my/icon.svg) }
```
```js
grunt.initConfig({
  encode-css-images: {
    options: {
      imageDir: 'lib/public'
    },
    ...
```

Given the above, icon.svg will be looked for at `lib/public/images/my/icon.svg`
