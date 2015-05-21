import Ember from 'ember';

export default Ember.Route.extend({
    // model() { .. } ??
    model: function(params) {
        return this.get('store').find('goals/goal');
    },

    actions: {

        edit() {
            this.controllerFor('goals.goal').set('isEditing', true);
        },
        doneEditing() {
            this.controllerFor('goals.goal').set('isEditing', false);
            this.modelFor('goals.goal').save();
        },
        deleteGoal() {
            this.modelFor('goals.goal').destroyRecord().then(() => {
                this.transitionTo('goals');
            });
        },
        createGoal() {
            this.send('edit');
            var newGoal = this.get('store').createRecord('goals/goal');
            newGoal.set('title', 'New goal title');
            console.log("About to transition");
            this.transitionTo('goals.goal', newGoal.save());
        }
    }
});
