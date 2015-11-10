import Ember from 'ember';

export default Ember.Route.extend({
    modal: Ember.inject.service(),

    setupController(controller, model) {
        this._super(controller, model)
        controller.showModal();
    },
});
