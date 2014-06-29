var lodash = angular.module('lodash', []);
lodash.factory('_', function() {
	return window._; // assumes lodash has already been loaded on the page
});

var myApp = angular.module('myApp',['ngAnimate', 'lodash', 'ui.bootstrap']);
myApp.controller('logIn', function($scope, $window, _, $modal) {
	$scope.signup = function() {
		console.log("click");
		$modal.open({
			templateUrl: 'myModalContent',
			controller: "ModalInstanceCtrl",
			// backdrop: false,
			windowClass: 'aaaaa',
			scope: $scope
		});
	}
});

myApp.controller('globalNavi', function($scope, $window, _) {
	$scope.klass = '';
	angular.element($window).on("scroll", _.throttle(function() {
		if (this.pageYOffset >= 100)
		{
			$scope.klass = "is-sticky";
		}
		else
		{
			$scope.klass = "";
		}
		$scope.$apply();
	}, 100));
});

myApp.controller('ModalInstanceCtrl', function($scope, $window, _) {
	console.log($scope);
});

myApp.directive('a', function() {
	return {
		restrict: 'E',
		link: function(scope, elem, attrs) {
			if(attrs.ngClick || attrs.href === '' || attrs.href === '#')
			{
				elem.on('click', function(e){
					e.preventDefault();
				});
			}
		}
	};
});