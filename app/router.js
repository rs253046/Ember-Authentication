import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('employees', function(){
    this.route('new');  
    this.route('employee', {path: '/:employee_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('users');
});

export default Router;
