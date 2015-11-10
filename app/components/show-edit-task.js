import Ember from 'ember';

let edit =  Symbol("edit");
let view =  Symbol("view");
let del =  Symbol("delete");

export default Ember.Component.extend({
    modal: Ember.inject.service(),
    mode: view,

    edit: false,

    modes: {del:del, view:view, edit:edit},

    initMode: function() {
        if(this.get('edit')) {
            this.set('mode', edit);
        }
    }.on('init'),

    title: function() {
        switch(this.get('mode')) {
            case edit:
                return 'Edit task ' + this.get('model.title');
            case view:
                return 'Task ' + this.get('model.title');
            case del:
                return 'Delete task ' + this.get('model.title');
        }
    }.property('model.title', 'mode'),

    date_or_notset: function() {
        return this.get('model.date') || "not set";
    }.property("model.date"),

    actions: {
        edit() {
            this.set('mode', edit);
        },
        save() {
            console.log("save");
            console.log(this.get('editform'));

            let editform = this.get('editform');

            editform.saveTask().then((task) => {
                this.set('model', task);
                this.set('mode', view);
            });
        },
        delete() {
            this.set('mode', del);
        },
        delete_confirmed() {
            let model = this.get('model');

            model.get('goal').then((goal) => {

                goal.get('tasks').removeObject(this.get('model'));

                goal.save().then(() => {
                    this.get('model').destroyRecord();
                }).then(() => {
                    this.get('modal').close('delete');
                    // notification? XXX
                });
            })
        },
        closeModal() {
            this.get('modal').close('close');
        },

    }
});
