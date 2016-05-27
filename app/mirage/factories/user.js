import Mirage, {faker}from 'ember-cli-mirage';
export default Mirage.Factory.extend({
  Nombre() {return faker.name.firstName();},
  Apellidos() {return faker.name.lastName();},
  Password: 12345,
  Nombre_Liga: 'LigaTest',
  Email_Usuario() {return faker.internet.email();},
  Email_Fijo() {return faker.internet.email();},
  Email_Jefe(){return faker.internet.email();}
});
