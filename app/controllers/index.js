import Ember from 'ember';

export default Ember.Controller.extend({
    modal: Ember.inject.service(),

    actions: {
        showModal(task) {
            this.get('modal').show('call-task-modal', task);
        },
    }
});
