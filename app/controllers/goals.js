import Ember from 'ember';

/* what is arrangedContent ? */

export default Ember.ArrayController.extend({
    newGoal: '',

    disabled: Ember.computed('newGoal', function() {
        return Ember.isEmpty(this.get('newGoal'));
    })
});
