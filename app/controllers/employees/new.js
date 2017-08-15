import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	newEmployee: {
    employeeName: "",
    employeeAddress: "",
    employeeNumber: "",
    employeePhoneNumber: ""
    //put attribute here
	},
	actions: {
		save() {
			var employee = this.store.createRecord('employee', this.newEmployee);
			const userEmployee = this.store.createRecord('user-employee', {
				user: this.get('session.currentUser'),
				employee: employee
			});

			employee.get('userEmployee').pushObject(userEmployee);
			employee.save().then((response) => {
				this.transitionToRoute('employees.employee.show', response);
			});
		}
	}
});