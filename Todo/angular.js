var app = angular.module("myApp" ,[]);

app.controller ("todo",function($scope){

	$scope.Tasks =[];

	$scope.submit = function(){

		if(event.which==13 && $scope.task!="")
		  {
		  	$scope.addTask();
		  	$scope.task="";
		  }
	};

	$scope.addTask =function(){
  
		$scope.Tasks.push({"taskMessage" : $scope.task , "status" : false});
		console.log($scope.Tasks);
		
	};

	$scope.contentedit = function(){

		event.target.contentEditable = event.target.contentEditable=="false" ? "true" : "false" ;
		console.log("sadoasdk");
	};

	$scope.enterAgain = function(msg){

		if(event.which==13 && msg!="")
			$scope.contentedit();
	};

});