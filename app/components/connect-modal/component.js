import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
    modal: Ember.inject.service(),
    remote: storageFor('remote'),
    dbsvc: Ember.inject.service("db"),

    config: function() {
        this.set('url', this.get('remote.url'));
    }.on('didReceiveAttrs'),

    actions: {
        disconnect() {
            let db = this.get("dbsvc");
            db.disconnect();
        },

        save() {
            let url = this.get('url');
            this.set('remote.url', url);
            let db = this.get("dbsvc");

            if(url) {
                db.sync(url);
                var remote = new PouchDB(url, {ajax: {timeout: 20000}});
                db.sync(remote, {live: true, retry: true});
            }
            this.get('modal').close('close');
        },

        disconnect() {
            thisget("dbsvc").disconnect();
            this.get('modal').close('close');
        },

        closeModal() {
            this.get('modal').close('close');
        }
    }
});
