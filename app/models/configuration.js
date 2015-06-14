import DS from 'ember-data';

export default DS.Model.extend({
    raw_task_priorities: DS.attr('string', {defaultValue: ""}),

    task_priorities() {
        return this.get('raw_task_priorities').split("|");
    }
});
