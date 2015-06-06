import Ember from "ember";

export default Ember.Controller.extend({
    goal: null,
    newTask: '',

    disabled: Ember.computed('newTask', function() {
        return Ember.isEmpty(this.get('newTask'));
    }),

    newTaskPlaceholder: Ember.computed('goal.title', function() {
        var goal = this.get('goal.title');
        return `Enter a new task for ${goal}`;
    })
});
