import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    configuration: Ember.inject.service(),

    // XXX similar to task-listitem.js
    date: function() {
        let d = moment(this.get('resource.date'));

        if(d.isValid()) {
            return moment(this.get('resource.date')).format("YYYY-MM-DD hh:mm");
        }
        return null;
    }.property("resource.date")
});
