import Ember from 'ember';

export default Ember.Route.extend({
    // model() { .. } ??
    model: function(params) {
        return this.get('store').find('goals/goal');
    },

    actions: {

        edit() {
            this.controllerFor('goals.goal').set('isEditing', true);
        },
        doneEditing() {
            this.controllerFor('goals.goal').set('isEditing', false);
            this.modelFor('goals.goal').save();
        },
        deleteGoal() {
            this.modelFor('goals.goal').destroyRecord().then(() => {
                this.transitionTo('goals');
            });
        },
        createGoal() {
            var store = this.get('store');
            var route = this;

            console.log("create b");
            var b = store.createRecord('modelb', {'title':'Model B'});
            console.log("b created, save b");
            b.save().then(bb => {
                console.log("b saved");
                console.log("create a");
                var a = store.createRecord('modela', {'title':'Model A'});
                console.log("a created, adding bb");
                a.set('modelb', bb);
                console.log("bb added, saving");
                a.save().then(aa => {
                    console.log("a saved; setting mas");
                    bb.get('modelas').pushObject(aa);
                    console.log("mas saved");
                    bb.save().then(bb => {
                        console.log("bb saved");
                    });
                });
            });

            this.send('edit');
            /*
            var newGoal = store.createRecord('goals/goal');
            newGoal.set('title', 'New goal title');
            console.log("About to transition");
            let g = newGoal.save();
            console.log(newGoal);
            console.log(g);

            g.then(goal => {
                var newTask = store.createRecord('task');
                newTask.set('title', "Wijn drinken");
                newTask.set('body', "Wijn is lekker!!!!1");
               // newTask.set('goal', goal);
                newTask.save().then(function(task) {
                    console.log(task);
                    console.log("voor", goal.get('tasks'));
                    var tasks = goal.get('tasks');

                    tasks.pushObject(task);
                    console.log("na", goal.get('tasks'));
                    goal.set('title', 'Goal with a task');
                    goal.save();
                    console.log("Saved goal");
                });
                route.transitionTo('goals.goal', goal);
            });
            */
        }
    }
});
