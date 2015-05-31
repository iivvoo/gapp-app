import Ember from "ember";

export default Ember.Controller.extend({
    needs: "goals",
    newTask: '',

    disabled: Ember.computed('newTask', function() {
        return Ember.isEmpty(this.get('newTask'));
    })
});
