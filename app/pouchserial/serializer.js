import DS from 'ember-data';

import EmberPouch from 'ember-pouch';

export default EmberPouch.Serializer.extend({
  serializeHasMany: function(snapshot, json, relationship) {
    // make sure hasMany relationships are serialized.
    // http://stackoverflow.com/questions/20714858/ember-data-saving-relationships
    var key = relationship.key;

    if (this._canSerialize(key)) {
      var payloadKey;

      // if provided, use the mapping provided by `attrs` in
      // the serializer
      payloadKey = this._getMappedKey(key);
      if (payloadKey === key && this.keyForRelationship) {
        payloadKey = this.keyForRelationship(key, "hasMany", "serialize");
      }

      var relationshipType = snapshot.type.determineRelationshipType(relationship);

      if (relationshipType === 'manyToNone' || relationshipType === 'manyToMany' || relationshipType == "manyToOne") {
        json[payloadKey] = snapshot.hasMany(key, { ids: true });
        // TODO support for polymorphic manyToNone and manyToMany relationships
      }
    }
  },
});
