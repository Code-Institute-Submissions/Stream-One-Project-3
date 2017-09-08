angular.module('TinuaFashionApp', ['ui.router','ui.bootstrap']);

  
	  angular.module('TinuaFashionApp').config(function($stateProvider,$urlRouterProvider) {
                    $urlRouterProvider.otherwise("/");
					
                $stateProvider.state('signinForm', {
                	url:'/signinForm',
                    templateUrl: '/template/signinForm.html'
                  
                });
				
				$stateProvider.state('signIn', {
                	url:'/signIn',
                    templateUrl: '/template/signIn.html',
                    controller: 'SignInCtrl'
                });
				
				$stateProvider.state('home', {
                	url:'/',
                    templateUrl: '/template/home.html',
                    controller : 'HomeCtrl'
                    
                });
 
                $stateProvider.state('createAccount', {
                	url:'/createAccount',
                    templateUrl: '/template/createAccount.html',
					controller:'CreateAccountCtrl'
                });
				
				 $stateProvider.state('shop', {
                	url:'/shop',
                    templateUrl: '/template/shop.html'
                });
				
				 $stateProvider.state('brand', {
                	url:'/brand',
                    templateUrl: '/template/brand.html'
                });	
				
				$stateProvider.state('womenJecket', {
                	url:'/womenJecket',
                    templateUrl: '/template/women_jecket.html',
                    controller: 'WomenCtrl'
                });	
				
                $stateProvider.state('womenDress', {
                    url:'/womenDress',
                    templateUrl: '/template/women_dress.html',
                    controller: 'DressCtrl'
                }); 
                
                $stateProvider.state('shoes', {
                    url:'/shoes',
                    templateUrl: '/template/shoes.html',
                    controller: 'ShoesCtrl'
                }); 
                
                 $stateProvider.state('babyDress', {
                    url:'/babyDress',
                    templateUrl: '/template/babyDress.html',
                    controller: 'babyDressCtrl'
                }); 
                

				
	 });
         	 
		
          				  
