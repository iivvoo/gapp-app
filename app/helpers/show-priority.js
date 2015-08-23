import Ember from 'ember';

export default Ember.Helper.extend({
    configuration: Ember.inject.service(),

    compute(priority) {
        const configuration = this.get('configuration');

        for(var prio of configuration.get('task_priorities')) {
            if(prio.prio === priority) {
                if(prio.cssclass) {
                    return Ember.String.htmlSafe(`<span class="label label-${prio.cssclass}">${prio.label}</span>`);
                }
                return '';
            }
        }

        return '';
    }
});
