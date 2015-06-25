import Ember from 'ember';

export default Ember.Controller.extend({
    configuration: Ember.inject.service(),

    task_priorities: Ember.computed.alias('configuration.task_priorities'),

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
