import Ember from 'ember';
import BaseController from './base';

export default BaseController.extend({
    configuration: Ember.inject.service(),

    date_or_notset: function() {
        return this.get('model.date') || "not set";
    }.property("model.date"),

    actions: {
        deleteTask() {
            let title = this.get('model.title');
            let conf = window.confirm(`Are you sure you want to delete "${title}"?`);

            if(conf) {
                let parent = this.get('model.goal');

                parent.get('tasks').removeObject(this.get('model'));

                parent.save().then(() => {
                    this.get('model').destroyRecord();
                }).then(() => {
                    this.transitionToRoute('goals.goal');
                });
            }
        },
    }
});
