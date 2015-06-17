import Ember from 'ember';

var ConfigurationController = Ember.Controller.extend({
    task_priorities() {
        return [{prio:0, label:"Not selected"},
                {prio:10, label:"Low"},
                {prio:20, label:"Medium"},
                {prio:30, label:"Important"},
                {prio:40, label:"Urgent"},
                {prio:50, label:"Critical"}]
    }
});

export default ConfigurationController;
