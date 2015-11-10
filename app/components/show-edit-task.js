import Ember from 'ember';

var edit = Symbol("edit");
var view = Symbol("view");
var del = Symbol("delete");

export { edit, view, del };

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

    _save() {
            let editform = this.get('editform');

            editform.saveTask().then((task) => {
                this.set('model', task);
                this.set('mode', view);
            });

    },
    _delete() {
        let model = this.get('model');

        model.get('goal').then((goal) => {

            goal.get('tasks').removeObject(this.get('model'));

            goal.save().then(() => {
                this.get('model').destroyRecord();
            }).then(() => {
                this.get('modal').close('delete');
                // notification? XXX
            });
        });
    },

    actions: {
        edit() {
            this.set('mode', edit);
        },
        save() {
            this._save();
        },
        delete() {
            this.set('mode', del);
        },
        delete_confirmed() {
            this._delete();
        },
        closeModal() {
            this.get('modal').close('close');
        },

    }
});
