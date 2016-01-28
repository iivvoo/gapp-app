import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
    title: DS.attr('string', {defaultValue: ""}),
    body: DS.attr('string', {defaultValue: ""}),
    date: DS.attr('date'),
    completed: DS.attr('boolean', {defaultValue: false}),
    tasks: DS.hasMany('task', {'async':false}),
    resources: DS.hasMany('resource', {'async':false}),
    rev: DS.attr('string'),

    incompleteCount: function() {
        return this.get('tasks').filterBy('isCompleted', false).length;
    }.property('tasks.@each.isCompleted')
});
