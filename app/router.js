import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('league', { path: '/leagues' });

  this.route('user', { path: '/users' }, function() {
  	this.resource('user', { path: '/users/:user_id' });
    this.route('new_user');
    this.route('edit_user');
    this.route('delete_user');
  });
  
});

export default Router;
