(function() {
    'use strict';

    angular
        .module('TinuaFashionApp')
        .controller('productDetailsCtrl',productDetailsCtrl);

   productDetailsCtrl.$inject = ['$http', '$scope'];

    /* @ngInject */
    function productDetailsCtrl($http, $scope) {
    	 	this.$http.('localhost:5000/product').then(function(data){
                      this.$scope.productlist = data.productlist;
    	 		
    	 	}).catch(function(){
    	 		console.log("Some error occur");
    	 	});
    }
})();