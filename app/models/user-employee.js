import DS from 'ember-data';

export default DS.Model.extend({
  userEmployee: DS.belongsTo('user'),
  employee: DS.belongsTo('employee')
});
