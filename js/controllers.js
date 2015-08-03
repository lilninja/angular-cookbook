angular
	.module('app')
	.controller('recipeListCtrl', function($scope, $http){
		$http.get('recipes/recipes.json').success(function(data){
			$scope.recipes = data;
			$scope.title = "hello";
		});
	})
	.controller('recipeDetailCtrl',['$scope', '$routeParams', function($scope, $routeParams){
		$scope.recipeId = $routeParams.recipeId;
	}]);
