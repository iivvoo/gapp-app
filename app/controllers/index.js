import Ember from 'ember';

export default Ember.Controller.extend({
    modal: Ember.inject.service(),

    actions: {
        showModal(id, model) {
            console.log(id, model);
            this.get('modal').show('call-task-modal', model);
        }
    }
});
