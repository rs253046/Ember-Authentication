import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	userEmployee: DS.hasMany('user-employee')
});
