import Ember from 'ember';
import moment from 'moment';
import BufferedProxy from 'ember-buffered-proxy/proxy';
import RegisterAsMixin from './register-as-mixin';

export default Ember.Component.extend(RegisterAsMixin, {
    configuration: Ember.inject.service(),

    task_priorities: Ember.computed.alias('configuration.task_priorities'),

    work_today: false,

    setupBuffer: function() {
        let buffer = BufferedProxy.create({
            content:this.get('model')
        });
        this.set('work', buffer);

        let d = moment(this.get('model.date'));
        if(!d.isValid()) {
            d = null;
        }
        buffer.set('date', d);

        this.set('work_today', this.get('model.workon'));
        return buffer;
    }.on('init'),

    saveTask: function() {
        this.get('work').applyChanges();

        this.set('model.workon', null);
        if(this.get('work_today')) {
            this.set('model.workon', new Date());
        }
        else {
            this.set('model.workon', null);
        }

        if(this.get('work.date') && this.get('work.date').isValid()) {
            this.set('model.date', this.get('work.date').toDate());
        }
        else {
            this.set('model.date', null);
        }
        return this.model.save();
    }

});
