import Ember from 'ember';

export default Ember.Route.extend({
    model: function(/*params*/) {
        //   debugger;
        return Ember.RSVP.hash({
            tasks: this.store.findAll('task'),
            goals: this.store.findAll('goal')
        });
    },

});
