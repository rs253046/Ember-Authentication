import Ember from 'ember';
import authenticatedRoute from '../mixins/authenticated-route'

export default Ember.Route.extend(authenticatedRoute, {

	// model() {
	// 	return this.store.findAll('employee');
	// }
});