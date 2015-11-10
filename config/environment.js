/* jshint node: true */

var contentSecurityPolicy = {
    'default-src': "'self'",
    'frame-src': "*",
    'script-src': "'self' 'unsafe-inline'",
    'font-src': "'self'",
    'connect-src': "'self' localhost:* *", // needed for couch sync
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-inline'",
    'media-src': "'self'"
};

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'gap-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
        "connect-src": "*"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = contentSecurityPolicy;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.manifest = {
        enabled: true,
        appcacheFile: "/manifest.appcache",
        excludePaths: [],
        includePaths: ['/'],
        network: ['*'],
        showCreateDate: true
    };
  }

  return ENV;
};
