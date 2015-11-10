import Ember from 'ember';
import moment from 'moment';

import BaseController from './base';

export default BaseController.extend({
    modal: Ember.inject.service(),

    showModal: function() {
        console.log("showModal edit");
        this.get('modal').show('call-task-edit-modal', this.get('model')).then(() => {
            // not entirely sure yet about this interaction. But once done,
            // make sure we leave the current route, else you can't reopen
            // the current task!
            this.transitionToRoute('goals.goal.tasks');
        });
    },

    configuration: Ember.inject.service(),

    task_priorities: Ember.computed.alias('configuration.task_priorities'),

    work_today: false,

    work: function() {
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

    actions: {
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

            this.model.save();
            this.transitionToRoute('goals.goal.tasks.task');
        },
        cancelTask: function() {
            // are you sure? XXX
            this.transitionToRoute('goals.goal.tasks.task');
        },
    }
});
