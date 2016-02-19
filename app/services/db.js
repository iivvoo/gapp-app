import Ember from 'ember';
import PouchDB from 'pouchdb';
import { storageFor } from 'ember-local-storage';

PouchDB.debug.enable('');

export default Ember.Service.extend({
    db: new PouchDB('gapdb'),
    remote: null,
    connected: false,
    synchandler: null,

    remote_storage: storageFor('remote'),

    connectFromLS: function() {
        let url = this.get("remote_storage.url");
        if(url) {
            this.sync(url);
        }
    },

    sync: function(url) {
        var remote = new PouchDB(url, {ajax: {timeout: 20000}});
        this.set('remote', remote);

        let synchandler = this.get('db').sync(remote, {live: true, retry: true});
        this.set('synchandler', synchandler);

        synchandler.on('change', info => {
            console.log("change", info);
        }).on('complete', info => {
            console.log("Complete", info);
            this.set('connected', false);
        }).on('active', info => {
            console.log("Active");
            this.set('connected', true);
        }).on('paused', info => {
            console.log("Paused", info);
            this.set('connected', true);
        }).on('error', err => {
            console.log("Pouch error", err);
        });
    },

    disconnect: function() {
        let synchandler = this.get('synchandler');
        if(synchandler) {
            synchandler.cancel();
        }
    }
});
