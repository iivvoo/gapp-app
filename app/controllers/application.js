import Ember from 'ember';

export default Ember.Controller.extend({
  bar: 10,

  frop: function() {
        console.log("He111lllo");
  }.on('init'),

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
