import DS from 'ember-data';

export default DS.Model.extend({
  Nombre_Liga: DS.attr('string'),
  Fecha_Inicio: DS.attr('date'),
  Fecha_Fin:  DS.attr('date')
});