import Ember from 'ember';

export default Ember.Component.extend({
    modal: Ember.inject.service(),
    edit: false,

    title: function() {
        if(this.get('edit')) {
            return 'Edit task ' + this.get('model.title');
        }
        return 'Task ' + this.get('model.title');
    }.property('model.title', 'edit'),

    date_or_notset: function() {
        return this.get('model.date') || "not set";
    }.property("model.date"),

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
