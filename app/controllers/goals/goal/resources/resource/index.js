import Ember from 'ember';

export default Ember.Controller.extend({
    configuration: Ember.inject.service(),

    // XXX shared with task
    date_or_notset: function() {
        return this.get('model.date') || "not set";
    }.property("model.date"),

    actions: {
        // XXX Very similar to task. bubble up?
        deleteResource() {
            let title = this.get('model.title');
            let conf = window.confirm(`Are you sure you want to delete "${title}"?`);

            if(conf) {
                let parent = this.get('model.goal');

                parent.get('resources').removeObject(this.get('model'));

                parent.save().then(() => {
                    this.get('model').destroyRecord();
                }).then(() => {
                    this.transitionToRoute('goals.goal');
                });
            }
        },
    }
});
