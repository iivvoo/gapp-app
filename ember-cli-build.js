/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var path = require('path');

var app = new EmberApp();
var bootstrapPath   = path.join(app.bowerDirectory,'/bootstrap/dist/');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

    //app.import(path.join(app.bowerDirectory, 'moment/min/moment-with-locales.min.js'));
    //app.import(path.join(app.bowerDirectory, 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'));
    app.import(path.join(bootstrapPath, 'js/bootstrap.js'));
    app.import(path.join(bootstrapPath, 'css/bootstrap.css'));
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.eot'), { destDir: '/fonts' });
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.svg'), { destDir: '/fonts' });
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.ttf'), { destDir: '/fonts' });
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff'), { destDir: '/fonts' });
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff2'), { destDir: '/fonts'});

  return app.toTree();
};
