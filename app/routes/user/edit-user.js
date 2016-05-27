import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		editModel (userSelected, userModel){
			userModel.set('Nombre',userSelected.get('Nombre'));
			userModel.set('Apellidos',userSelected.get('Apellidos'));
			userModel.set('Password',userSelected.get('Password'));
			userModel.set('Nombre_Liga',userSelected.get('Nombre_Liga'));
			userModel.set('Email_Usuario',userSelected.get('Email_Usuario'));
			userModel.set('Email_Fijo',userSelected.get('Email_Fijo'));
			userModel.set('Email_Jefe',userSelected.get('Email_Jefe'));
		}
	}
});
