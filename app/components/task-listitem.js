import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    configuration: Ember.inject.service(),

    date: function() {
        let d = moment(this.get('task.date'));

        if(d.isValid()) {
            return moment(this.get('task.date')).format("YYYY-MM-DD hh:mm");
        }
        return null;
    }.property("task.date"),

    actions: {
        toggleCompleted: function() {
            this.set("task.isCompleted", !this.get("task.isCompleted"));
            this.get("task").save()
        }
    }
});
