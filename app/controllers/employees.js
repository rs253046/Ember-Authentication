import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),

	userEmployee: Ember.computed('session.currentUser.userEmployee.[]', {
		get() {
			return this.get('session.currentUser.userEmployee');
		}
	})
});