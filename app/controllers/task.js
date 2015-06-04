import Ember from 'ember';

export default Ember.Controller.extend({
    stateChange: function() {
        console.log("State changed?!");
    }.observexxxs("model.isCompleted")
});
