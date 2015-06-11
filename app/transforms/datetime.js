import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return moment(serialized);
  },
  serialize: function(deserialized) {
    if(deserialized) {
        return deserialized.toISOString();
    }
    return null;
  }
});
