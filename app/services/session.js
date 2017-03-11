import Ember from 'ember';

export default Ember.Service.extend({
	store: Ember.inject.service(),
	currentUser: null,

	login(user) {
    this.set('currentUser', user);
    Cookies.set('userId', user.id);
	},

	logout(user) {
    this.set('currentUser', null);
    Cookies.set('userId', null);
	},

  initializeFromCookie: function(){
    var userId = Cookies.get('userId');
    if(!!userId){
      var user = this.get('store').find('user', userId)
      this.set('currentUser', user)
    }
  }.on('init')
});
