var Equipment = Backbone.Model.extend({
	
  template: _.template('<tr><td><%= resource %></td><td><%= type %></td><td><%= allocated %></td></tr>'),

  initialize: function() {
	 this.render();
  },

  highlight: function() {
    this.trigger('highlight', this);
  },

  render: function() {
    return this.template(this.attributes);
  }
});