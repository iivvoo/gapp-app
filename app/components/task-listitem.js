import Ember from 'ember';

export default Ember.Component.extend({
    handleCompleted: function() {
        this.task.save();
    }.observes('task.isCompleted')
});
