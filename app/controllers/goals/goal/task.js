import Ember from 'ember';

export default Ember.Controller.extend({
    needs: 'task',
    isEditing: false,

    actions: {
        editTask: function() {
            this.set('isEditing', true);
        },
        saveTask: function() {
            this.set('isEditing', false);
            this.model.save();
        },
        cancelTask: function() {
            this.set('isEditing', false);
            this.model.rollback();
        },
        deleteTask() {
            // remove from goal! XXX
            return;
            this.model.destroyRecord().then(() => {
                this.transitionTo('goals');
            });
        },
    }
});
