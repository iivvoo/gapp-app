import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
import db from '../../adapters/database';

export default Ember.Component.extend({
    modal: Ember.inject.service(),
    remote: storageFor('remote'),

    config: function() {
        this.set('url', this.get('remote.url'));
    }.on('didReceiveAttrs'),

    /*
     * Save, disconnect/clear, save buttons
     * if save, store in localstorage,
     * attempt connect
     */
    actions: {
        disconnect() {

        },
    
        save() {
            let url = this.get('url');
            this.set('remote.url', url);
            if(url) {
                var remote = new PouchDB(url, {ajax: {timeout: 20000}});
                db.sync(remote, {live: true, retry: true});
            }
            this.get('modal').close('close');
        },

        closeModal() {
            this.get('modal').close('close');
        }
    }
});
