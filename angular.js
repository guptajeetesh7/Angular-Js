

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider ) {
    $routeProvider
    
    .when('/', {
        templateUrl : "login.html"
    })
    .when('/dashboard', {
    	
    	resolve : {

    		'check' : function($rootScope ,$location){
    			if (!$rootScope.loggedIn) {
    				$location.path("/");
    			}
    		}

    	},

        templateUrl : "dashboard.html"

            })    ;
    
});


app.controller('loginCtrl',function($scope , $location ,$rootScope){

	 $scope.submit=function(){

	if($scope.username== "admin" && $scope.password=="admin")
	{
	     $rootScope.loggedIn=true;	
		$location.path('/dashboard');
	}
	else{
		alert("Wrong account");
	}
  }

});