import Ember from "ember";

export default Ember.Route.extend({
    model(params) {
        return this.get('store').find('goal', params.goal_id);
    },

    afterModel: function(model) {
      var goalTitle = this.modelFor('goals/goal').get('title');
      Ember.$(document).attr('title', `Gap: ${goalTitle}`);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('goal', this.modelFor('goals/goal'));
    },

    actions: {
        createTask() {
            var store = this.get('store');
            var controller = this.get('controller');
            var goal = this.modelFor('goals/goal');
            console.log("Task goal", goal);

            var name = controller.get('newTask');

            //this.send('edit');

            store.createRecord('task', {title: name, goal: goal}).save().then(task => {
                goal.get('tasks').pushObject(task);
                return goal.save();
            }).then(goal => {
                controller.set('newTask', '');
            });
        }
    }
});

