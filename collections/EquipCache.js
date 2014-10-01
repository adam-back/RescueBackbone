var EquipmentCache = Backbone.Collection.extend({
	
  model: Equipment,

	initialize: function() {
	 this.on('highlight', this.highlight, this);
  },

  highlight: function() {
    alert('I will highlight something!');
  }

});