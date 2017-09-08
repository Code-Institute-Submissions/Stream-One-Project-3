angular.module('TinuaFashionApp')
	.controller('HomeCtrl', function($scope) {

		var slidesList = [{
			image: "image/slide_img10.jpg",
			id: "1"
		}, {
			image: "image/slide_img12.jpg",
			id: "2"
		}, {
			image: "image/slide_img9.jpg",
			id: "3"
		}];

		$scope.myInterval = 4000;
		$scope.noWrapSlides = false;
		$scope.active = 0;
		var slides = $scope.slides = [];
		var currIndex = 0;

		$scope.addSlide = function(image) {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: image,
				text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 3],
				id: currIndex++
			});
		};


		for (var i = 0; i < 3; i++) {
			$scope.addSlide(slidesList[i].image);
		}
	});