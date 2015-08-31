import Ember from 'ember';

export default Ember.Route.extend({
    afterModel(goal) {
        if(goal.get('tasks.length') > 0) {
            // Or only if uncomplete tasks?
            this.transitionTo('goals.goal.tasks');
        }
        else if(goal.get('resources.length') > 0) {
            this.transitionTo('goals.goal.resources');
        }
    }
});
