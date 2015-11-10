import Ember from 'ember';
import BaseController from './base';

export default BaseController.extend({
    modal: Ember.inject.service(),

    showModal: function() {
        this.get('modal').show('call-task-modal', this.get('model')).then(() => {
            // not entirely sure yet about this interaction. But once done,
            // make sure we leave the current route, else you can't reopen
            // the current task!
            this.transitionToRoute('goals.goal.tasks');
        });
    }
});
