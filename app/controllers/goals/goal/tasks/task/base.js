import Ember from 'ember';
import moment from 'moment';

// http://emberjs.jsbin.com/Elibefem/1/edit?html,js,output
export default Ember.Controller.extend({
    now: null,

    startGlobalTime:function(){
        this.set('now', Date.now());
        Ember.run.later(this, this.startGlobalTime, 2000);
    }.on('init'),

    workon_today: function() {
        let workon = this.get('model.workon');

        return workon && moment(this.get('now')).isSame(moment(workon), "day");
    }.property('model.workon', 'now'),
});
