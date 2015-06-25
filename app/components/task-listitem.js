import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    configuration: Ember.inject.service(),

    date: function() {
        let d = moment(this.get('task.date'));

        if(d.isValid()) {
            return moment(this.get('task.date')).format("YYYY-MM-DD hh:mm");
        }
        return null;
    }.property("task.date"),

    priority: function() {
        for(var prio of this.get('configuration.task_priorities')) {
            if(prio.prio == this.get('task.priority')) {
                return prio;
            }
        }
        return null;
    }.property('task.priority', 'configuration.task_priorities'),

    handleCompleted: function() {
        this.task.save();
    }.observes('task.isCompleted')
});
