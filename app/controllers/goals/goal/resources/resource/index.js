import Ember from 'ember';

export default Ember.Controller.extend({
    modal: Ember.inject.service(),

    showModal: function() {
        this.get('modal').show('call-resource-modal', this.get('model')).then(() => {
            // not entirely sure yet about this interaction. But once done,
            // make sure we leave the current route, else you can't reopen
            // the current task!
            this.transitionToRoute('goals.goal.resources');
        });
    },
});
