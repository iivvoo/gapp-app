import DS from 'ember-data';

import EmberPouch from 'ember-pouch';

export default EmberPouch.Serializer.extend({
    serializeIntoHash: function(a, b, c, d) {
        console.log("bla");
        debugger;
        return this._super(a,b,c,d);
    }
});
