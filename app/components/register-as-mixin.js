import Ember from 'ember';

export default Ember.Mixin.create({
    registerParent: function() {
        /* http://www.samselikoff.com/blog/getting-ember-components-to-respond-to-actions/
         * on('init') no longer works as expected. the didInsertElement is
         * suggested as a workaround but that results in a deprecation warning
         * about performance. willInsertElement seems to work fine
         *
         * alternatives:
         * http://www.thesoftwaresimpleton.com/blog/2015/04/26/inter-component/
         *
         * Another alternative might be to observe a property passed from the
         * parent and act appropriately.
         */
        this.set('register-as', this);
    }.on('willInsertElement')
});
