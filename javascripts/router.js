PersonalRouter = Backbone.Router.extend({

	routes: {
		"home"			: "home",
		"newEvent"		: "createNew",
		"new_leave_event": "createNewLeave",
		"about"			: "about",
		""				: "home"
		
	},

	home: function() {
		
	},

	about: function() {
	
	},

	createNew: function() {
	 
	},

	createNewLeave: function() {
		
	},


})
var router = new PersonalRouter() 
Backbone.history.start()