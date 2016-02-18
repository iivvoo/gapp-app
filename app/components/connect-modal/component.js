import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

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
        save() {
            this.set('remote.url', this.get('url'));
            this.get('modal').close('close');
        },

        closeModal() {
            this.get('modal').close('close');
        }
    }
});
