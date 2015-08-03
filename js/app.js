angular
	.module('app',[
		'ngRoute'
	])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider.

			when('/rus', {
				templateUrl: 'templates/rus.html',
				controller: 'recipeListCtrl'
			}).

			when('/fr', {
				templateUrl: 'templates/fr.html',
				controller: 'recipeListCtrl'
			}).

			when('/it', {
				templateUrl: 'templates/it.html',
				controller: 'recipeListCtrl'
			}).

			when('/recipes/:recipeId', {
        		templateUrl: 'templates/recipe.html',
        		controller: 'recipeDetailCtrl'
      		}).

			otherwise({
        	redirectTo: '/'
      		});
	}])