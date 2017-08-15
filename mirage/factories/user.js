import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return getUser(i + 1).name;
  },
  email(i) {
		return getUser(i + 1).email;
	},

});


function getUser(i) {
  return Users.find((item)=>{return item.userId == i});
}


var Users = [
  {
    userId: 1,
  	name: 'Rahul Singh',
  	email: 'rahulsept2191@gmail.com'
  }, {
  	userId: 2,
  	name: 'Swati Singh',
  	email: 'test@gmail.com'
  },  {
  	userId: 3,
  	name: 'Soran Singh',
  	email: 'support@gmail.com'
  }
]
