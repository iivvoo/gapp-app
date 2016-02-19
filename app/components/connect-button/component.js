import Ember from 'ember';

export default Ember.Component.extend({
    extra_class: '',
    modal: Ember.inject.service(),
    dbsvc: Ember.inject.service('db'),

    state: function() {
        if(this.get('dbsvc.connected')) {
            return 'Connected';
        }
        return 'Connect';

    }.property('dbsvc.connected'),

    toggleConnection() {
        this.get('modal').show('call-connect-modal');
    },


});
