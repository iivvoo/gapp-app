import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return moment(serialized);
  },
  serialize: function(deserialized) {
    return deserialized.toISOString();
  }
});
