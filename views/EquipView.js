var EquipmentView = Backbone.View.extend({

  tagName: 'table',

	initialize: function() {
    this.render();
	},

  events: {
    'click': function() {
      debugger;
      this.cache.highlight();
    }
  },

	render: function() {
		return this.$el.html(
      this.collection.map(function(tool) {
        return tool.render();
      })
    );
  }    
});