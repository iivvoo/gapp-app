import Ember from 'ember';

export default Ember.Route.extend({
    modal: Ember.inject.service(),

    //intl: Ember.inject.service(),
    beforeModel() {
      //  this.get('intl').setLocale('en-us');
    },

    initModal: function() {
        this.get('modal').setApplicationRoute(this);
    }.on('init')
});
