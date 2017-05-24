var app = angular.module("myApp" , []);

app.directive("myDirective",function () {




	return{

		scope : {
			name : '@'
		},

		template : '<p>Value of name in directive {{name}}</p>'

	}

}); 

app.controller("custom",function($scope){

	$scope.myname = "Jeetesh Gupta";
});