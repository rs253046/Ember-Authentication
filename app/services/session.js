import Ember from 'ember';

export default Ember.Service.extend({
	currentUser: null,

	login(user) {
    this.set('currentUser', user);
	},

	logout(user) {
    this.set('currentUser', null);
	}
});
