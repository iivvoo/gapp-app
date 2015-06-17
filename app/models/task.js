import DS from 'ember-data';


export default DS.Model.extend({
    goal: DS.belongsTo('goal'),
    title: DS.attr('string', {defaultValue: ""}),
    body: DS.attr('string', {defaultValue: ""}),
    isCompleted: DS.attr('boolean'),
    priority: DS.attr('number', {defaultvalue: 0}),
    date: DS.attr('datetime'),
    rev: DS.attr('string')
});
