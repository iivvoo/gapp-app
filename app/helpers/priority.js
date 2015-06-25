import Ember from 'ember';

export function priority(priority) {
    return 'HELLEP!';
    let configuration =  Ember.inject.service();

    for(var prio of this.get('configuration.task_priorities')) {
        if(prio.prio == this.get('task.priority')) {
            return Ember.Handlebars.SafeString(`<span class="label label-{{priority.cssclass}}">{{prio.label}}</span>`);
        }
    }

  return '';
}

export default Ember.Handlebars.makeBoundHelper(priority);
