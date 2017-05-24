
var classApp = angular.module('weatherApp',[]);

classApp.controller('weatherCtrl',function($scope ,$http){

	$scope.channelInfo = {

		heading : "Open Weather API",
		subheading1 : "Free Code Camp :Front End Projects",
		subheading2 : {
		
		name :	"FOSSASIA WEB DEVELOPERS" ,
		link : " https://www.facebook.com/"

		}
	};


	$http.get("http://ip-api.com/json").success(function(data){

		$scope.lat = data.lat;
		$scope.lon= data.lon;

		var apiKey = "c242d2031036ff05b3bd8559f91e2449";

		console.log("http://ip-api.com/json");

		var openWeatherUrl ="http://api.openweathermap.org/data/2.5/weather?lat="+ $scope.lat + "&lon="+ $scope.lon +"&appid=c242d2031036ff05b3bd8559f91e2449" ;

		
		

		$http.get(openWeatherUrl).success(function(data){

			console.log(openWeatherUrl);
			console.log("Connection done");

		$scope.description = data.weather[0].description;
		$scope.speed = (2.237*data.wind.speed).toFixed(1) + "mph";
		$scope.name = data.name;
			$scope.temp = data.main.temp;
			$scope.fTemp = ($scope.temp *(9/5)-459).toFixed(1) + " F";
			$scope.cTemp = ($scope.temp-273).toFixed(1) + "C" ;

			$scope.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon +".png";



			
		});

	});


});


