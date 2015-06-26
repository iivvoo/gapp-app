import Ember from 'ember';

export default Ember.Controller.extend({
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

                console.log("B", parent.get('tasks'));
                parent.get('tasks').removeObject(this.get('model'));
                console.log("A", parent.get('tasks'));

                parent.save().then(goal => {
                    this.get('model').destroyRecord();
                }).then(() => {
                    this.transitionToRoute('goals.goal');
                });
            }
        },
    }
});
