var EquipmentView = Backbone.View.extend({

  tagName: 'table',

	initialize: function() {
    this.render();
	},

	render: function() {
		this.$el.html(this.collection.attributes);
    return this;  
  }    
});