import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['configuration'],

    task_priorities: function() {
        return this.get('controllers.configuration.task_priorities')();
    }.property('controllers.configuration.task_priorities'),

    actions: {
        saveTask: function() {
            this.model.save();
            this.transitionToRoute('goals.goal.task');
        },
        cancelTask: function() {
            this.model.rollback();
            this.transitionToRoute('goals.goal.task');
        },
    }
});
