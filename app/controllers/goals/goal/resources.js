import Ember from "ember";

export default Ember.Controller.extend({
    goal: null,
    newResource: '',

    sortProperties: ['date:asc'], 
    sortedResources: Ember.computed.sort('resources', 'sortProperties'),

    resources: function() {
        // still needed?
        return this.get('goal.resources').filter(function(resource) {
            return true;
        });
    }.property('goal.resources'),

    disabled: Ember.computed('newResource', function() {
        return Ember.isEmpty(this.get('newResource'));
    }),

    newResourcePlaceholder: Ember.computed('goal.title', function() {
        var goal = this.get('goal.title');
        return `Enter a new resource for ${goal}`;
    }),
});
