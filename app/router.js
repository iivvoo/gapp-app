import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


Router.map(function() {
  this.route('goals', function() {
      this.route('goal', {path: ':goal_id'}, function() {
          this.route('edit');
          this.route('tasks', function() {
              this.route('task', {path: ':task_id'}, function() {
                  this.route('edit');
              });
          });
          this.route('resources', function() {
              this.route('resource', {path: ':resource_id'}, function() {
                  this.route('edit');
              });
          });
      });
  });
});

/*
Router.map(function() {
  this.route('goals', function() {
    this.route('goal', { path: ':goal_id' }, function() { // show
      this.route('tasks', function() {
        this.route('task', {  // show
          path: ':task_id'
        });
        this.route('edit', {
          path: ':task_id/edit'
        });
      });
      this.route('resources', function() {
        this.route('resource', {  // show
          path: ':resource_id'
        });
        this.route('edit', {
          path: ':resource_id/edit'
        });
      });
    });
  });
});
*/

export default Router;
