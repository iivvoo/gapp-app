import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string', {defaultValue: ""}),
    body: DS.attr('string', {defaultValue: ""}),
    date: DS.attr('date'),
    tasks: DS.hasMany('task', {'async':false}),
    rev: DS.attr('string')
});
