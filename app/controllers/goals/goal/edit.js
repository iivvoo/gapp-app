import Ember from "ember";

export default Ember.Controller.extend({
    work: function() {
        return Ember.Object.create({
            title: this.get('model.title'),
            body: this.get('model.body')
        });
    }.property('model'),

    actions: {
        saveGoal: function() {
            for(var attr of ["title", "body"]) {
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
            console.log("Delete alles!");
            return;
            this.model.destroyRecord().then(() => {
                this.transitionTo('goals');
            });
        },
    }
});
