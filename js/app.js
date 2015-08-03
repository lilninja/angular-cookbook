angular
	.module('app',[
		'ngRoute'
	])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider.

			when('/rus', {
				templateUrl: 'templates/rus.html',
				controller: 'rusListCtrl'
			}).

			when('/fr', {
				templateUrl: 'templates/fr.html',
				controller: 'frListCtrl'
			}).

			when('/it', {
				templateUrl: 'templates/it.html',
				controller: 'itListCtrl'
			}).

			otherwise({
        	redirectTo: '/'
      		});
	}])