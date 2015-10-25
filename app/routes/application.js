import Ember from 'ember';

export default Ember.Route.extend({
    //intl: Ember.inject.service(),
    beforeModel() {
      //  this.get('intl').setLocale('en-us');
    },
    actions: {
        showModal: function(name, model) {
          console.log("showModal");
          this.render(name, {
            into: 'application',
            outlet: 'modal',
            model: model
          });
        },
        removeModal: function() {
          this.disconnectOutlet({
            outlet: 'modal',
            parentView: 'application'
          });
        }
    }
});
