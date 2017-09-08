(function() {
    'use strict';

    angular
        .module('TinuaFashionApp')
        .controller('DressCtrl', DressCtrl);

    WomenCtrl.$inject = ['$http', '$scope'];

    /* @ngInject */
    function DressCtrl($http, $scope) {
    	 	$http.get('product.json').then(function(response){

    	 		$scope.brandNames =  response.data.map(function(elem, index) {
    	 			return elem.brandName;
    	 		})
    	 		$scope.uksizes =  ["6","8","10","12","14"];
                 $scope.fabric = ["Wool","Cotton","Leather","Manmade"];
    	 	}).catch(function(){
    	 		console.log("Some error occur");
    	 	});
    }
})();