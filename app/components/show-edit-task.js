import Ember from 'ember';

export default Ember.Component.extend({
    modal: Ember.inject.service(),
    edit: false,

    actions: {
        edit() {
            console.log("edit");
            this.set('edit', !this.get('edit'));
        },
        closeModal() {
            this.get('modal').close('close');
        }
    }
});
