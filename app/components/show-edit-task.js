import Ember from 'ember';

export default Ember.Component.extend({
    modal: Ember.inject.service(),
    edit: false,

    actions: {
        edit() {
            console.log("edit");
            this.set('edit', !this.get('edit'));
        },
        save() {
            console.log("save");
            console.log(this.get('editform'));

            let editform = this.get('editform');

            editform.saveTask().then((task) => {
                console.log("Saved");
                this.set('model', task);
                this.set('edit', !this.get('edit'));
            });
        },
        closeModal() {
            this.get('modal').close('close');
        },

    }
});
