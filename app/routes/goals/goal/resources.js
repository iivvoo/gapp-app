import Ember from "ember";

export default Ember.Route.extend({
    afterModel: function(/*model*/) {
      // XXX shared with tasks
      var goalTitle = this.modelFor('goals.goal').get('title');
      Ember.$(document).attr('title', `Gap: ${goalTitle}`);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
      // XXX shared with tasks
        controller.set('goal', this.modelFor('goals.goal'));
    },

    actions: {
        createResource() {
            var store = this.get('store');
            var controller = this.get('controller');
            var goal = this.modelFor('goals/goal');

            var name = controller.get('newResource');

            store.createRecord('resource', {title: name, goal: goal}).save().then(resource => {
                goal.get('resources').pushObject(resource);

                return goal.save().then(() => {
                    controller.set('newResource', '');
                    return this.transitionTo('goals.goal.resources.resource.edit', resource);
                });
            });
        }
    }
});

