import Ember from "ember";

export default Ember.Controller.extend({
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
