import DS from 'ember-data';
import moment from 'moment';
import { Model } from 'ember-pouch';

export default Model.extend({
    goal: DS.belongsTo('goal'),
    title: DS.attr('string', {defaultValue: ""}),
    body: DS.attr('string', {defaultValue: ""}),
    isCompleted: DS.attr('boolean'),
    priority: DS.attr('number', {defaultvalue: 0}),
    date: DS.attr('date'),
    workon: DS.attr('date', {defaultValue: null}), // XXX rename?
    completedDate: DS.attr('date', {defaultValue: null}),
    rev: DS.attr('string'),

    sortablePriority: function() {
        return this.get('priority') || -1;
    }.property('priority'),

    sortableDate: function() {
        let d = this.get('date');
        if(moment(d).isValid()) {
            return d;
        }
        // use created + fixed time. This way earlier created takes slight priority.
        return new Date(2090, 1, 1);
    }.property('date'),

    setCompletedDate: function() {
        this.set('completedDate', new Date());
    }.observes('isCompleted')

});
