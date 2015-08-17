angular
.module('app')
.factory('recipes', ['$http', function($http){
	return $http.get('recipes/recipes.json')
	.success(function(data){
		return data;
	})
	.error(function(data) {
		return data;
	});
}]);