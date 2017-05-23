var app = angular.module("myApp" ,[]);

app.controller ("todo",function($scope){

	$scope.Tasks =[];

	var taskData = localStorage['tasksList'];

	if(taskData !== undefined)
	{
		$scope.Tasks= JSON.parse(taskData);
	}

	$scope.submit = function(){

		if(event.which==13 && $scope.task!="")
		  {
		  	$scope.addTask();
		  	$scope.task="";
		  }
	};

	$scope.addTask =function(){
  
		$scope.Tasks.push({"taskMessage" : $scope.task , "status" : false});
		localStorage['tasksList'] = JSON.stringify($scope.Tasks);
		console.log(localStorage);
	};

	$scope.contentedit = function(msg){

		event.target.contentEditable = event.target.contentEditable=="false" ? "true" : "false" ;
		for( i=0 ; i< $scope.Tasks.length ; i++)
		{
			if($scope.Tasks[i].taskMessage==msg){
				$scope.Tasks[i].taskMessage= event.target.innerText;
			}
		}
		localStorage['tasksList'] = JSON.stringify($scope.Tasks);
	};

	$scope.enterAgain = function(msg){

		if(event.which==13 && msg!="")
			$scope.contentedit(msg);
	};

	
});