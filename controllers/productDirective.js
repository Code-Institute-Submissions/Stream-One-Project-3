angular.module('TinuaFashionApp')
.directive('productDirective',function(){
   return{
	   restrict: 'E',
	   scope:{
		 itemlist: '=',
         title: '='						 
	   },
 	templateUrl:'template/productList.html'
   };
});