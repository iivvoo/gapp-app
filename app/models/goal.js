import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string', {defaultValue: ""}),
    body: DS.attr('string', {defaultValue: ""}),
    date: DS.attr('date'),
    tasks: DS.hasMany('task', {'async':false}),
    rev: DS.attr('string'),

    isCompleted: function() {
        return this.get('tasks').filterBy('isCompleted', false).length > 0;
    }.property('tasks.@each.isCompleted')
});
