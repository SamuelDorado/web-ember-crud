import Mirage, {faker}from 'ember-cli-mirage';
export default Mirage.Factory.extend({
	Nombre_Liga() {return faker.commerce.productName();},
	Fecha_Inicio() {return faker.date.past();},
	Fecha_Fin() {return faker.date.future();},
});
