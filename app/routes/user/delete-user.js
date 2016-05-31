import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		deleteModel(userModel){
				this.store.unloadRecord(userModel);
				this.transitionTo('user');
		}
	}
});
