import DS from 'ember-data';

console.log("la");
export default DS.Model.extend({
    title: DS.attr('string', {defaultValue: ""}),
    body: DS.attr('string', {defaultValue: ""}),
    date: DS.attr('date'),
    rev: DS.attr('string')
});
