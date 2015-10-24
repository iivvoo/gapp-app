import Ember from 'ember';

/* what is arrangedContent ? */

export default Ember.Controller.extend({
    newGoal: '',
    showCompleted: false,

    sortProperties: ['title:asc'], // title_lower()?
    sortedGoals: Ember.computed.sort('goals', 'sortProperties'),

    goals: function() {
        let showCompleted = this.get('showCompleted');

        return this.get('model').filter(function(goal) {
            return showCompleted || !goal.get('completed');
        });
    }.property('@each.completed', 'showCompleted'),

    disabled: Ember.computed('newGoal', function() {
        return Ember.isEmpty(this.get('newGoal'));
    })
});
