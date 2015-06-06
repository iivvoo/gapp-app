import Ember from "ember";

export default Ember.Controller.extend({
    goal: null,
    needs: "goals",
    newTask: '',
    isEditing: false,

    disabled: Ember.computed('newTask', function() {
        return Ember.isEmpty(this.get('newTask'));
    }),

    newTaskPlaceholder: Ember.computed('goal.title', function() {
        var goal = this.get('goal.title');
        return `Enter a new task for ${goal}`;
    }),

    actions: {
        saveGoal: function() {
            this.set('isEditing', false);
            this.model.save();
        },
        cancelEdit: function() {
            this.set('isEditing', false);
            this.model.rollback();
        },
        deleteGoal() {
            // delete related tasks or make them orphans?
            this.model.destroyRecord().then(() => {
                this.transitionTo('goals');
            });
        },
    }
});
