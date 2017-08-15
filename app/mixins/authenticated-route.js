import Ember from 'ember';

export default Ember.Mixin.create({
	session: Ember.inject.service(),
	beforeModel(transition) {
    if(!this.get('session.currentUser')){
  	  var loginController = this.controllerFor('users');
  	  loginController.set('previousTransition', transition);
  	  this.transitionTo('users');
    }
	}
});
