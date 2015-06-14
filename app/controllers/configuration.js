import Ember from 'ember';

var ConfigurationController = Ember.Controller.extend({
    task_priorities() {
        return ["Critical", "Urgent", "Important", "Someday", "Don't Care"];
    }
});

export default ConfigurationController;
