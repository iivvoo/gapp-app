import Ember from 'ember';
import moment from 'moment';


export default Ember.Controller.extend({
    configuration: Ember.inject.service(),

    // XXX quite similar to task - generalize?
    work: function() {
        let d = moment(this.get('model.date'));
        if(!d.isValid()) {
            d = null;
        }

        return Ember.Object.create({
            title: this.get('model.title'),
            body: this.get('model.body'),
            date: d
        });
    }.property("model"), // this might/will cause the form to update values if the model changes.

    actions: {
        // XXX quite similar to task - generalize?
        saveResource: function() {
            this.set('model.date', null); // make sure we're not restoring invalid dates

            if(this.get('work.date') && this.get('work.date').isValid()) {
                this.set('model.date', this.get('work.date').toDate());
            }
            for(var attr of ["title", "body", ]) {
                this.set(`model.${attr}`, this.get(`work.${attr}`));
            }

            this.model.save();
            this.transitionToRoute('goals.goal.resources.resource');
        },
        cancelResource: function() {
            // are you sure? XXX
            this.transitionToRoute('goals.goal.resources.resource');
        },
    }
});