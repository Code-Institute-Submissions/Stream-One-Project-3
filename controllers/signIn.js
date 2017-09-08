angular.module('SignInCtrl',[])
              .controller( 'logInCtrl', function($scope,$state){
				 $scope.submit = function(){
					 var uemail = $scope.userEmail;
					 var password = $scope.password;
					 if($scope.uemail == 'admin' && scope.password == 'admin'){
						 $state.go('dashbord');
					 }
					 
				 };
				 
				  });