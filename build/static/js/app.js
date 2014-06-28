var myApp = angular.module('myApp',['ngAnimate']);

myApp.controller('globalNavi', function($scope, $window) {
	$scope.klass = '';
	angular.element($window).on("scroll", function() {
		if (this.pageYOffset >= 100)
		{
			$scope.klass = "box-global-navi--fixed";
		}
		else
		{
			$scope.klass = "";
		}
		$scope.$apply();
	});
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