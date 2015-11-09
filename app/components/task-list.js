import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    /*
     * arguments:
     * type: "today": restricts taskslist for tasks marked for today
     * tasks: task model (required)
     */
    type: "default",

    configuration: Ember.inject.service(),

    sortProperties: ['sortableDate:asc', 'sortablePriority:desc'],
    sortedTasks: Ember.computed.sort('filtered', 'sortProperties'),

    on_plate: function() {
        let now = moment();

        return this.get("tasks").filter(task => {
            // XXX need trick similar to task base controller to observe date changes
            if(task.get('isCompleted')) {
                return false;
            }
            if(!task.get('workon') || !moment(task.get('workon')).isBefore(now)) {
                return false;
            }

            return true;
        });

    }.property("tasks.@each.workon", "tasks.@each.isCompleted"),

    complete: function() {
        let now = moment();

        return this.get("tasks").filter(task => {
            if(!task.get('isCompleted')) {
                return false;
            }

            // it's completed but was it completed today?
            if(!moment(task.get('completedDate')).isSame(now, "day")) {
                return false;
            }

            return true;
        });
    }.property("tasks.@each.completedDate", "tasks.@each.isCompleted"),

    urgent: function() {
        let twodayslater = moment(moment() + moment.duration(2, "days"));
        let threshold = this.get("configuration.urgent_task_threshold");

        return this.get("tasks").filter(task => {

            if(task.get('isCompleted')) {
                return false;
            }

            if(moment(task.get("date")).isBefore(twodayslater)) {
                return true;
            }

            if(task.get("priority") >= threshold) {
                return true;
            }
            return false;
        });
    }.property("tasks.@each.date", "tasks.@each.priority", "configuration.urgent_task_threshold"),

    filtered: function() {
        return this.get(this.get("type"));
    }.property("type", "on_plate", "complete", "urgent"),

    actions: {
        click: function(task) {
            this.get('onClick')(task);
        }
    }
});
