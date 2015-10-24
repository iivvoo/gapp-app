import Ember from 'ember';

export default Ember.Route.extend({
    model: function(/*params*/) {
        //   debugger;
        return Ember.RSVP.hash({
            tasks: this.store.find('task'),
            goals: this.store.find('goal')
        });
    }
});
