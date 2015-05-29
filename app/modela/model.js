import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    modelb: DS.belongsTo('modelb'),
    rev: DS.attr('string')
});
