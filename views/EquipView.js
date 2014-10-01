var EquipmentView = Backbone.View.extend({

  tagName: 'table',

	initialize: function() {
    this.render();
	},

	render: function() {
		return this.$el.html(
      this.collection.map(function(tool) {
        return tool.render();
      })
    );
  }    
});