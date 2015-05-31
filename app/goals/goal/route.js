import Ember from "ember";

export default Ember.Route.extend({
    model(params) {
        return this.get('store').find('goals/goal', params.goal_id);
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

