angular
	.module('app')
	.controller('rusListCtrl', ['$scope', function($scope){
		$scope.title = "Rus List";
		$scope.recipes = ['Крутая гречневая каша',
						'Блины гречневые пополам с пшеничной мукой заварные',
						'Белый торт миндальный'];

	}])

angular
	.module('app')
	.controller('frListCtrl', ['$scope', function($scope){
		$scope.title = "Fr List";
		$scope.recipes = ['Круассаны',
						'Луковый суп',
						' Крем-брюле'];

	}])

angular
	.module('app')
	.controller('itListCtrl', ['$scope', function($scope){
		$scope.title = "It List";
		$scope.recipes = ['Спагетти, Каннеллони',
						'Пицца',
						'Ризотто'];

	}])