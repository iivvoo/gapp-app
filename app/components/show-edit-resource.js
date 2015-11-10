import ShowEditTaskComponent from './show-edit-task';
import { view, edit, del } from './show-edit-task';

export default ShowEditTaskComponent.extend({
    title: function() {
        switch(this.get('mode')) {
            case edit:
                return 'Edit resource ' + this.get('model.title');
            case view:
                return 'Resource ' + this.get('model.title');
            case del:
                return 'Delete resource ' + this.get('model.title');
        }
    }.property('model.title', 'mode'),

    _save() {
            let editform = this.get('editform');

            editform.saveResource().then((resource) => {
                this.set('model', resource);
                this.set('mode', view);
            });

    },
    _delete() {
        let model = this.get('model');

        model.get('goal').then((goal) => {

            goal.get('resources').removeObject(this.get('model'));

            goal.save().then(() => {
                this.get('model').destroyRecord();
            }).then(() => {
                this.get('modal').close('delete');
                // notification? XXX
            });
        });
    },

});
