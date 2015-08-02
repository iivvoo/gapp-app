import DS from 'ember-data';

export default DS.Model.extend({
    goal: DS.belongsTo('goal'),
    title: DS.attr('string', {defaultValue: ""}),
    body: DS.attr('string', {defaultValue: ""}),
    date: DS.attr('date'),
    rev: DS.attr('string')
});
