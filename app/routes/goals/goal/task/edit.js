export default Ember.Route.extend({
    setupController: function(controller, model) {
        // controllers are singletons!
        this._super(controller, model);
        controller.set('isEditing', true);
        console.log("edit setup");
    },
    xresetController: function (controller, isExiting, transition) {
        console.log('reset');
        controller.set('isEditing', false);
    }
});
