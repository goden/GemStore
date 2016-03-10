(function() {

	var app = angular.module("store", ["directives", "ngRoute"]);
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

	// use $scope instead of controllerAs

	// app.config(function($routeProvider) {
	// 	$routeProvider.when("/primary", {
	// 		templateUrl: "/pages/product-footer-primary.html",
	// 		controller: function() {
	// 			this.message = "I am primary.";
	// 		},
	// 		controllerAs: "primary"
	// 	}).when("/secondary", {
	// 		templateUrl: "/pages/product-footer-secondary.html",
	// 		controller: function() {
	// 			this.hint = "I am secondary.";
	// 		},
	// 		controllerAs: "secondary"
	// 	}).otherwise({
	// 		redirectTo: "/"
	// 	});
	// });

	app.config(function($routeProvider) {
		$routeProvider.when("/primary", {
			templateUrl: "/pages/product-footer-primary.html",
			controller: function($scope) {
				$scope.message = "I am primary.";
			}
		}).when("/secondary", {
			templateUrl: "/pages/product-footer-secondary.html",
			controller: function($scope) {
				$scope.hint = "I am secondary.";
			}
		}).otherwise({
			redirectTo: "/"
		});
	});

})();