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
            var store = this.get('store');
            var controller = this.get('controller');
            var name = controller.get('newGoal');

            this.send('edit');

            store.createRecord('goals/goal', {title: name}).save().then(goal => {
                controller.set('newGoal', '');
                this.transitionTo('goals.goal', goal);
            });
        }
    }
});
