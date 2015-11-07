import Ember from 'ember';

export default Ember.Controller.extend({
    modal: Ember.inject.service(),

    actions: {
        showModal: function(name, model) {
          this.get('modal').show('call-task-modal', model);
          /*
          console.log("showModal", model);
          this.render(name, {
            into: 'application',
            outlet: 'modal',
            model: model
          });
          */
        },
    }
});
