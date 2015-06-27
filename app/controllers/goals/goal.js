import Ember from "ember";

export default Ember.Controller.extend({
    goal: null,
    newTask: '',

    showCompleted: false,

    queryParams: ['showCompleted'],

    sortProperties: ['sortableDate:asc', 'sortablePriority:desc'],
    sortedTasks: Ember.computed.sort('tasks', 'sortProperties'),

    tasks: function() {
        return this.get('goal.tasks');
    }.property('goal.tasks'),

    tasks: function() {
        let showCompleted = this.get('showCompleted');

        return this.get('goal.tasks').filter(function(task) {
            return showCompleted || !task.get('isCompleted');
        });
    }.property('goal.tasks.@each.isCompleted', 'showCompleted'),

    disabled: Ember.computed('newTask', function() {
        return Ember.isEmpty(this.get('newTask'));
    }),

    newTaskPlaceholder: Ember.computed('goal.title', function() {
        var goal = this.get('goal.title');
        return `Enter a new task for ${goal}`;
    }),
});
