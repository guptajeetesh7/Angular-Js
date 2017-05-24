
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

		var openWeatherUrl ="api.openweathermap.org/data/2.5/weather?lat="+ $scope.lat + "&lon="+ $scope.lon +"&appid=" + apiKey ;

		$http.get(openWeatherUrl).success(function(data){

			console.log(data.weather[0].description);
		});

	});


});