// import config from '../config/environment';
import Ember from 'ember';
import { Adapter } from 'ember-pouch';

export default Adapter.extend({
  defaultSerializer: "pouchserial",
  dbsvc: Ember.inject.service("db"),

  db: function() {
      return this.get("dbsvc.db");
  }.property("dbsvc"),

  // Change watcher for ember-data
  // Ember Data 2.0 Reload behavior
  shouldReloadRecord: function() { return true; },
  shouldReloadAll: function() { return true; },
  shouldBackgroundReloadRecord: function() { return true; },
  shouldBackgroundReloadAll: function() { return true; },

  // Change watcher for ember-data
  immediatelyLoadAllChangedRecords: function() {
    let db = this.get("db");
    this.get("dbsvc").connectFromLS();

    db.changes({
      since: 'now',
      live: true,
      returnDocs: false
    }).on('change', function (change) {
      var obj = db.rel.parseDocID(change.id);
      // skip changes for non-relational_pouch docs. E.g., design docs.
      if (!obj.type || obj.type === '') { return; }

      //var appController = this.container.lookup("controller:application");
      //appController.send('kickSpin');

      //var store = this.container.lookup('store:main');
      //store.find(obj.type);
    }.bind(this));
  }.on('init')
});
