import Ember from 'ember';

export default Ember.Component.extend({
    extra_class: '',
    modal: Ember.inject.service(),

    state: function() {
        if(this.get('_xstate')) {
            return 'Connected';
        }
        return 'Connect';

    }.property('_xstate'),

    toggleConnection() {
        console.log("toggle");
        this.set('_xstate', !this.get('_xstate'));
        this.get('modal').show('call-connect-modal');
    },


});
