angular
.module('app',[
	'ui.router'
	])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('new', {
		url: '/',
		templateUrl: 'templates/new.html',
		controller: 'RecipeListCtrl'
	})

	.state('popular', {
		url: '/popular',
		templateUrl: 'templates/popular.html',
		controller: 'RecipeListCtrl'
	})

	.state('season', {
		url: '/season',
		templateUrl: 'templates/season.html',
		controller: 'RecipeListCtrl'
	})

	.state('info', {
		url: '/info',
		templateUrl: 'templates/info.html'
	})

	.state('recipeId',{
		url: '/recipes/:recipeId',
		templateUrl: 'templates/recipe.html',
		controller: 'RecipeDetailCtrl'
	});
}])