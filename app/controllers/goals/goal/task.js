import Ember from 'ember';

export default Ember.Controller.extend({
    needs: 'task',
    isEditing: false,
    frap: null,

    actions: {
        editTask: function() {
            this.set('frap', this.model.date || (new Date()));
            this.set('isEditing', true);
        },
        saveTask: function() {
            this.set('isEditing', false);
            //this.model.date = this.model.date.toISOString();
            this.model.save().then(m => {
                console.log("Saved");
                console.log(m.date);
            }).catch(e => {
                console.log(e);
            });
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
