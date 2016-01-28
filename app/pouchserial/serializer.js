import EmberPouch from 'ember-pouch';

export default EmberPouch.Serializer.extend({
  _shouldSerializeHasMany(snapshot, key, relationship) {
    var relationshipType = snapshot.type.determineRelationshipType(relationship, this.store);
    if (this._mustSerialize(key)) {
      return true;
    }
    return this._canSerialize(key) && (relationshipType === 'manyToNone' || relationshipType === 'manyToMany' || relationshipType == 'manyToOne');
  }
});
