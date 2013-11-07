Router = Backbone.Router.extend({

	routes: {
		"home"			: "home",
		"resume"		: "resume",
		""				: "redirect"
		
	},

	redirect: function() {
		router.navigate('home', {trigger: true});
	},

	home: function() {
		$('.container').html('') 
		
		new MainView()
		console.log("Home")

		
	},

	resume: function() {
		$('.container').html('') 
		new ResumeView()

		console.log("Resume")
	
	},

	
})
var router = new Router() 
Backbone.history.start()