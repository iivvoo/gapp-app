import Ember from 'ember';

export default Ember.Route.extend({
    // model() { .. } ??
    model: function(params) {
        return this.get('store').find('goal');
    },

    actions: {

        edit() {
            this.controllerFor('goal').set('isEditing', true);
        },
        doneEditing() {
            this.controllerFor('goal').set('isEditing', false);
            this.modelFor('goal').save();
        },
        deleteGoal() {
            this.modelFor('goal').destroyRecord().then(() => {
                this.transitionTo('goals');
            });
        },
        createGoal() {
            var store = this.get('store');
            var controller = this.get('controller');
            var name = controller.get('newGoal');

            this.send('edit');

            store.createRecord('goal', {title: name}).save().then(goal => {
                controller.set('newGoal', '');
                this.transitionTo('goals.goal', goal);
            });
        }
    }
});
