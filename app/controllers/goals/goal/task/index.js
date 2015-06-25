import Ember from 'ember';

export default Ember.Controller.extend({
    configuration: Ember.inject.service(),

    date_or_notset: function() {
        return this.get('model.date') || "not set";
    }.property("model.date"),

    actions: {
        deleteTask() {
            // remove from goal! XXX
            return;
            // move transition to route? Seems to be prefered
            this.model.destroyRecord().then(() => {
                this.transitionTo('goals');
            });
        },
    }
});
