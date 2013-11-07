

MainView = Backbone.View.extend({
	template: _.template(  $('#main-template').text() ),

	initialize: function() {
		$('.container').append(this.el)
		this.render()
		console.log("Home View")
		$(window).load(function() {
		    $('.flexslider').flexslider();
		  });
	},

	render: function(){
		console.log(this.$el)
		this.$el.html( $('#main-template').text())
		   $('.flexslider').flexslider();      
		console.log("Render Home")
	},

})

ResumeView = Backbone.View.extend({
	template: _.template(  $('#about-template').text() ),

	initialize: function() {

		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		console.log(this.$el)
		this.$el.html($('#about-template').text())
	},

})
