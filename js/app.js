(function() {
	var app = angular.module("store", []);
	app.controller("StoreController", function() {
		this.product = gem;
	});


	// prepare data for presentation
	// 
	var gem  = {
		name: "尊爵紫寶石",
		price: 200000,
		description: "純正的愛情 - 紫水晶代表靈性、精神、高層次的愛意，可作對仰慕者的一種定情物、信物。"
	};

})();