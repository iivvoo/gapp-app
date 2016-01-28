import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
    goal: DS.belongsTo('goal'),
    title: DS.attr('string', {defaultValue: ""}),
    body: DS.attr('string', {defaultValue: ""}),
    date: DS.attr('date'),
    rev: DS.attr('string')
});
