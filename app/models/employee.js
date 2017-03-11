import DS from 'ember-data';

export default DS.Model.extend({
	employee: DS.attr('string'),
	employeeName: DS.attr('string'),
  employeeAddress: DS.attr('string'),
  employeeNumber: DS.attr('number'),
  employeePhoneNumber: DS.attr('number'),
	toS: Ember.computed.alias('name'),
	userEmployee: DS.hasMany('user-employee')
});