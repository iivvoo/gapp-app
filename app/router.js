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

export default Router;
