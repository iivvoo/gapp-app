import Ember from 'ember';

export default Ember.Component.extend({
    date: function() {
        if(this.get('task.date')) {
            return this.get('task.date').format("YYYY-MM-DD hh:mm");
        }
        return null;
    }.property("task.date"),

    handleCompleted: function() {
        this.task.save();
    }.observes('task.isCompleted')
});
