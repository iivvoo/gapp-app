import Ember from 'ember';

export default Ember.Route.extend({
    xsetupController: function(controller, model) {
        // controllers are singletons!
        this._super(controller, model);
        controller.set('isEditing', false);
        console.log("setup");
    },
    resetController: function (controller, isExiting, transition) {
        console.log('reset');
        controller.set('isEditing', false);
    }
});
