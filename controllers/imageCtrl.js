angular.module('TinuaFashionApp')
	

	.controller('imageCtrl', ['$scope', function($scope) {

		$scope.imageDetails = [{
				title: "Bomber Jecket",
				price: "£100",
				image: "image/girl_dress1.jpg"
			},

			{
				title: "Bomber Jecket",
				price: "£200",
				image: "image/girl_dress2.jpg"
			},

			{
				title: "Bomber Jecket",
				price: "£40",
				image: "image/girl_dress3.jpg"
			}
		]
	}]);



