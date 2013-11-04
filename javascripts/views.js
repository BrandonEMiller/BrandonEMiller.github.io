AboutView = Backbone.View.extend({
	template: _.template(  $('#about-template').text() ),

	initialize: function() {
		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.append(this.template())
	},

})

MainView = Backbone.View.extend({
	template: _.template(  $('#main-template').text() ),

	initialize: function() {
		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.append(this.template())
	},

})

SampleView = Backbone.View.extend({
	template: _.template(  $('#work-sample-template').text() ),

	initialize: function() {
		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.append(this.template())
	},

})