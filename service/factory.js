angular.module('UserFactory',[])
             .factory('UserFactory',function(){
			     var user = [
				 { title: 'Mr' ,firstName: 'Abu', lastName: 'Taher', userEmail: 'taher@gmail.com', userTel: '0755446', password: 'admin'},
				 { title: 'Mrs', firstName: 'Zara', lastName: 'islam', userEmail: 'rayqa@yahoo.com', userTel: '12345', password: '123456'},
				  { title: 'Dr', firstName: 'Ria', lastName: 'Islam', userEmail: 'liza@gmail.com', userTel: '12345', password: '98765'},
				{ title: 'Mss', firstName: 'Raha', lastName: 'Uddin', userEmail: 'hure@yahoo.co.uk', userTel: '3567888', password: '34567'}
				
				 ];
				 
				 var factory = {};
				 factory.getUser = function (){
					 return user;
				 };
				 factory.postUser = function(user){
					 
				 };
				 return factory;
			 
		 });
		 