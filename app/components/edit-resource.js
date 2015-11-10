import Ember from 'ember';

import BufferedProxy from 'ember-buffered-proxy/proxy';
import RegisterAsMixin from './register-as-mixin';

export default Ember.Component.extend(RegisterAsMixin, {

    setupBuffer: function() {
        let buffer = BufferedProxy.create({
            content:this.get('model')
        });
        this.set('work', buffer);

        return buffer;
    }.on('init'),

    saveResource: function() {
        this.get('work').applyChanges();

        return this.model.save();
    }
});
