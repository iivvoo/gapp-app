import Ember from 'ember';

export default Ember.Component.extend({
    /*
     * arguments:
     * completed: null, no, yes: shows all, incomplete, completed tasks
     * type: "today": restricts taskslist for tasks marked for today
     * tasks: task model (required)
     */
    completed: null,
    type: null,

    sortProperties: ['sortableDate:asc', 'sortablePriority:desc'],
    sortedTasks: Ember.computed.sort('filtered', 'sortProperties'),

    filtered: function() {
        return this.get("tasks").filter(task => {
            // XXX need trick similar to task base controller to observe date changes
            if(this.get("type") == "today" && !task.get('workon') ||
               !moment(task.get('workon')).isSame(moment(), "day")) {
                return false;
            }
            if(this.get("completed") == "yes" && !task.get('isCompleted')) {
                return false;
            }

            if(this.get("completed") == "no" && task.get('isCompleted')) {
                return false;
            }

            return true;
        });
    }.property('tasks')
});
