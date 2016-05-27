import DS from 'ember-data';

export default DS.Model.extend({
  Nombre: DS.attr('string'),
  Apellidos: DS.attr('string'),
  Password:  DS.attr('number'),
  Nombre_Liga: DS.attr('string'),
  Email_Usuario: DS.attr('string'),
  Email_Fijo: DS.attr('string'),
  Email_Jefe: DS.attr('string')
});