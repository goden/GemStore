(function() {
	var app = angular.module("directives", []);
	app.directive("productHeader", function() {
		return {
			restrict: "E",
			templateUrl: "../pages/product-header.html"
		};
	});

	app.directive("productPanels", function() {
		return {
			restrict: "E",
			templateUrl: "../pages/product-panels.html",
			controller: function() {
				this.tab = 1;
				this.selectTab = function (selectedTab) {
					this.tab = selectedTab;
				};
				this.isSelected = function (currentTab) {
					return this.tab === currentTab;
				};
			},
			controllerAs: "panel"
		};
	});

	app.directive("productReviewForm", function() {
		return {
			restrict: "E",
			templateUrl: "../pages/product-review-form.html",
			controller: function($scope) {
				$scope.review = {};

				$scope.addReview = function(product) {
					product.reviews.push($scope.review);
					$scope.review = {};
				};
			}
		};
	});

}) ();