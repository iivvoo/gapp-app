import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('goals', function() {
      this.route('goal', {path: ':goal_id'});
  });
  this.route('task', {path: ':task_id'});
});

export default Router;
