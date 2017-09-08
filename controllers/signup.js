 angular.module('CreateAccountCtrl',[])
             .controller( 'registerCtrl', function($scope,UserFactory){
				         $scope.user = UserFactory.getUser();
			             
			      $scope.createAccount = function(){
					  $scope.user.push({
                             title: $scope.newUser.title, 
                             firstName : $scope.newUser.firstName,
                             lastName: $scope.newUser.lastName,
							 userTel:$scope.newUser.userTel,
						     password:$scope.newUser.password,
}) ;
					 
				  };
			     
		 });
 