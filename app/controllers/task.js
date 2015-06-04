import Ember from 'ember';

export default Ember.Controller.extend({
    frop: 'lala',

    stateChange: function() {
        console.log("State changed?!");
    }.observes("isCompleted"),

    actions: {
        frop: function() {
            console.log("FRAP!");
        }
    }
});
