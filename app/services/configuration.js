import Ember from 'ember';

export default Ember.Service.extend({
    task_priorities: function() {
        return [{prio:0, label:"Not selected", cssclass: ""},
                {prio:10, label:"Low", cssclass: "default"},
                {prio:20, label:"Medium", cssclass: "success"},
                {prio:30, label:"Important", cssclass: "info"},
                {prio:40, label:"Urgent", cssclass: "warning"},
                {prio:50, label:"Critical", cssclass: "danger"}];
    }.property(),
    urgent_task_threshold: function() {
        return 30;
    }.property()
});
