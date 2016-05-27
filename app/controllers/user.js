import Ember from 'ember';

export default Ember.Controller.extend({
	userSelected: '',
	userModel:'',
	deleteButtonIsDisabled:true,
		actions: {
			selectUser(user) {
				var userToSelect = this.store.createRecord('user',{Nombre:user.get('Nombre'),Apellidos:user.get('Apellidos'),Password:user.get('Password'),Nombre_Liga:user.get('Nombre_Liga'),Email_Usuario:user.get('Email_Usuario'),Email_Fijo:user.get('Email_Fijo'),Email_Jefe:user.get('Email_Jefe')})
				this.set('userSelected',userToSelect)	
				this.set('userModel',user)
				this.set('deleteButtonIsDisabled',false)	
				this.transitionToRoute('user.edit_user')
			}
		}
});
