import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		deleteModel(userModel){
			this.store.find('user',userModel.get('id')).then(function(user){	
				console.log(userModel.get('id'));
				user.deleteRecord();
				user.get('isDeleted')
				user.save();
				})
		}
	}
});
