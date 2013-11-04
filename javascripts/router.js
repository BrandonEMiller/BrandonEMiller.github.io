PersonalRouter = Backbone.Router.extend({

	routes: {
		"home"			: "home",
		"sample"		: "sample",
		"about"			: "about",
		""				: "home"
		
	},

	home: function() {
		$('.container').html('') 
		new MainView()
		
	},

	about: function() {
		$('.container').html('') 
		new AboutView()
	
	},

	sample: function() {
		$('.container').html('') 
		new SampleView()
	 
	},



})
var router = new PersonalRouter() 
Backbone.history.start()