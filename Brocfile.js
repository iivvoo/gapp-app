/* global require, module */
'use strict';

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var path = require('path');

var app = new EmberApp();
var bootstrapPath   = path.join(app.bowerDirectory,'/bootstrap/dist/');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import(path.join(bootstrapPath, 'js/bootstrap.js'));
app.import(path.join(bootstrapPath, 'css/bootstrap.css'));
app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.eot'), { destDir: '/fonts' });
app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.svg'), { destDir: '/fonts' });
app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.ttf'), { destDir: '/fonts' });
app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff'), { destDir: '/fonts' });
app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff2'), { destDir: '/fonts'});


module.exports = app.toTree();
