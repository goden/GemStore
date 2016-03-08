(function() {

	var app = angular.module("store", ["directives"]);
	app.controller("StoreController", ["$http", function($http) {

		var store = this;
		store.products = [];

		$http.get("/products.json").then(function(response) {
			store.products = response.data;
		}, function(errResponse) {
			console.log("Error when fetching notes." + errResponse.message + ".");
		});

	}]);

	app.controller("ReviewController", function() {

		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();