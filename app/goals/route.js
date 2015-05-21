import Ember from 'ember';

export default Ember.Route.extend({
    // model() { .. } ??
    model: function(params) {
        return null;
        // how would the call below work?
        return this.get('store').find('goals/goal');
    },

    actions: {

        edit() {
            this.controllerFor('goals.goal').set('isEditing', true);
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
