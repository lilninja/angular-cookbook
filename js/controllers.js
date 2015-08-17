angular
.module('app')
.controller('RecipeListCtrl', ['$scope', 'recipes', function($scope, recipes){
	recipes.success(function(data){
		$scope.recipes = data;
	});
	$scope.title = "hello";

	$scope.like = function(recipe){
		var num = $scope.recipes.indexOf(recipe);
		$scope.recipes[num].like +=  1;
	};

}])
.controller('RecipeDetailCtrl',['$scope', '$stateParams', 'recipes', function($scope, $stateParams, recipes){
	recipes.success(function(data){
		$scope.recipe = data[$stateParams.id];
	});
	$scope.recipeId = $stateParams.recipeId;
}]);
