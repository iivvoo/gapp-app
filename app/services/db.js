import Ember from 'ember';
import PouchDB from 'pouchdb';

PouchDB.debug.enable('');

export default Ember.Service.extend({
    db: new PouchDB('local1'),
    remote: null,

    sync: function(url) {
        var remote = new PouchDB(url, {ajax: {timeout: 20000}});
        this.get('db').sync(remote, {live: true, retry: true});
        this.set('remote', remote);
    },

    disconnect: function() {
        let remote = this.get('remote');
        if(remote) {
            remote.cancel();
        }
    }
});
