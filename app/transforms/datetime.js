import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if(serialized) {
        return moment(serialized);
    }
    return null;
  },
  serialize: function(deserialized) {
    if(deserialized) {
        return deserialized.toISOString();
    }
    return null;
  }
});
