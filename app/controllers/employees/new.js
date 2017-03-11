import Ember from 'ember';

export default Ember.Controller.extend({
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
			employee.save().then((response) => {
				this.transitionToRoute('employees.employee.show', response);
			});
		}
	}
});