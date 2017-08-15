import Ember from 'ember';
import unauthenticatedRoute from '../mixins/unauthenticated-route';
export default Ember.Route.extend(unauthenticatedRoute, {
	model() {
		return this.store.findAll('user');
	}
});
