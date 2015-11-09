import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    configuration: Ember.inject.service(),

    task_priorities: Ember.computed.alias('configuration.task_priorities'),

    work_today: false,

    registerParent: function() {
        /* http://www.samselikoff.com/blog/getting-ember-components-to-respond-to-actions/
         * on('init') no longer works as expected. the didInsertElement is
         * suggested as a workaround but that results in a deprecation warning
         * about performance. willInsertElement seems to work fine
         *
         * alternatives:
         * http://www.thesoftwaresimpleton.com/blog/2015/04/26/inter-component/
         *
         * Another alternative might be to observe a property passed from the
         * parent and act appropriately.
         */
        console.log('Engaging hack');
        this.set('register-as', this);
    }.on('willInsertElement'),

    work: function() {
        console.log("work", this.get('model'));
        let d = moment(this.get('model.date'));
        if(!d.isValid()) {
            d = null;
        }

        this.set('work_today', this.get('model.workon'));

        return Ember.Object.create({
            title: this.get('model.title'),
            body: this.get('model.body'),
            isCompleted: this.get('model.isCompleted'),
            date: d,
            priority: this.get('model.priority') || 0
        });
    }.property("model"), // this might/will cause the form to update values if the model changes.

    saveTask: function() {
        this.set('model.date', null); // make sure we're not restoring invalid dates

        this.set('model.workon', null);
        if(this.get('work_today')) {
            this.set('model.workon', new Date());
        }
        else {
            this.set('model.workon', null);
        }
        if(this.get('work.date') && this.get('work.date').isValid()) {
            this.set('model.date', this.get('work.date').toDate());
        }
        for(var attr of ["title", "body", "isCompleted", "priority"]) {
            this.set(`model.${attr}`, this.get(`work.${attr}`));
        }

        console.log("Saving in edit comp");
        return this.model.save();
    }

});
