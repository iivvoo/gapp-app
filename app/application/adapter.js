// import config from '../config/environment';
import EmberPouch from 'ember-pouch';
import PouchDB from 'pouchdb';

var db = new PouchDB('local1'); //config.local_couch || 'bloggr');
//var remote = new PouchDB("http://ivo:ivo@localhost:5984/hamster", {ajax: {timeout: 20000}});
var remote = new PouchDB("http://ivo:g3h31m@rommel.m3r.nl:5984/gapp-ivo", {ajax: {timeout: 20000}});

db.sync(remote, {live: true, retry: true});


PouchDB.debug.enable('');

export default EmberPouch.Adapter.extend({
  defaultSerializer: "pouchserial",
  db: db,

  // Change watcher for ember-data
  immediatelyLoadAllChangedRecords: function() {
    this.db.changes({
      since: 'now',
      live: true,
      returnDocs: false
    }).on('change', function (change) {
      var obj = this.db.rel.parseDocID(change.id);
      // skip changes for non-relational_pouch docs. E.g., design docs.
      if (!obj.type || obj.type === '') { return; }
      var store = this.container.lookup('store:main');
      store.find(obj.type);
    }.bind(this));
  }.on('init')
});
