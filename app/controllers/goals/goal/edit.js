import Ember from "ember";

export default Ember.Controller.extend({
    work: function() {
        return Ember.Object.create({
            title: this.get('model.title'),
            body: this.get('model.body'),
            completed: this.get('model.completed')
        });
    }.property('model'),

    actions: {
        saveGoal: function() {
            for(var attr of ["title", "body", "completed"]) {
                this.set(`model.${attr}`, this.get(`work.${attr}`));
            }

            this.model.save();
            this.transitionToRoute('goals.goal');
        },
        cancelEdit: function() {
            // XXX are you sure?
            this.transitionToRoute('goals.goal');
        },
        deleteGoal() {
            // delete related tasks or make them orphans?
            let goal = this.get("model");
            let tasks = goal.get("tasks");
            let resources = goal.get("resources");

            let title = goal.get('title');
            let conf = window.confirm(`Are you sure you want to delete "${title}" and all tasks?`);

            if(!conf) {
                return;
            }

            goal.destroyRecord().then(() => {
                return Ember.RSVP.all(tasks.map(task => {
                    return task.destroyRecord();
                }));
            }).then(() => {
                return Ember.RSVP.all(resources.map(resource => {
                    return resource.destroyRecord();
                }));

            }).then(() => {
                this.transitionTo('goals');
            });
        },
    }
});
