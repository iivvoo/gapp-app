import Ember from 'ember';

export default Ember.Route.extend({
    // model() { .. } ??
    model: function(params) {
        console.log("Goals", params);
        return this.get('store').find('goal');
    },

    actions: {

        editGoal() {
            console.log("EDIT!");
            this.controllerFor('goals.goal').set('isEditing', true);
        },
        createGoal() {
            var store = this.get('store');
            var controller = this.get('controller');
            var name = controller.get('newGoal');

            // this.send('edit');

            store.createRecord('goal', {title: name}).save().then(goal => {
                controller.set('newGoal', '');
                this.transitionTo('goals.goal', goal);
            });
        }
    }
});
