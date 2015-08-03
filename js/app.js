angular
	.module('app',[
		'ngRoute'
	])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider.

			when('/rus', {
				templateUrl: 'templates/rus.html',
			}).

			when('/fr', {
				templateUrl: 'templates/fr.html',
			}).

			when('/it', {
				templateUrl: 'templates/it.html',
			}).

			otherwise({
        	redirectTo: '/'
      		});
	}])