import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
    raw_task_priorities: DS.attr('string', {defaultValue: ""}),

    task_priorities() {
        return this.get('raw_task_priorities').split("|");
    }
});
