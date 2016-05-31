import Ember from 'ember';

export default Ember.Route.extend({		
	actions: {
		createNewUser(newUser){
			this.store.createRecord('user', 
			{
		  		Nombre: newUser.Nombre,
		  		Apellidos: newUser.Apellidos,
		  		Password: newUser.Password,
		  		Email_Usuario: newUser.Email_Usuario,
		  		Email_Fijo: newUser.Email_Fijo,
		  		Email_Jefe: newUser.Email_Jefe
			});
			newUser.set('Nombre','');
	  		newUser.set('Apellidos','');
	  		newUser.set('Password','');
	  		newUser.set('Email_Usuario','');
	  		newUser.set('Email_Fijo','');
	  		newUser.set('Email_Jefe','');
			window.scrollTo(0,document.body.scrollHeight);
			this.transitionTo('user');
		}
	},
	    setupController: function(controller, model) {
        controller.set('newUser', model);
    }
});
