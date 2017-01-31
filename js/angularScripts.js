$(function(){
	//datepicker scripti
	$('#datetimepicker').datetimepicker({
		format: 'DD.MM.YYYY'
	});
});



var app = angular.module('Finnkinosovellus', []);
app.controller('ScheduleController', function ($scope, $http) {
	// oletusarvot teatterin valinnalle
	$scope.current = {
		Name: "Valitse teatteri", ID: 0
	}
	
	// haetaan teatterit ja tallennetaan theatreareas scopeen
	$http.get("http://www.finnkino.fi/xml/TheatreAreas/", {
		transformResponse: function (cnv) {
			//käännetään XML -> JSON
			var x2js = new X2JS();
			var aftCnv = x2js.xml_str2json(cnv);
			return aftCnv;
		}
	})
	.then(function success(data) {
		$scope.theatreareas = data.data.TheatreAreas.TheatreArea;
	}, function(error) {
		console.log("error theatre");
	});
	
	// searchiin arvot
	$scope.search = function(){
		var paiva = $('#datetimepicker').find("input").val();
		search($scope.current.ID, paiva);
	}
	$scope.select = function(value) {
		$scope.current = value;
	}

	// search-funktio johon otetaan parametreina teatteri ja päivä
	// ja leivotaan niistä URLI joka hakee esityslistan
	function search(area, date) {
		$http.get("http://www.finnkino.fi/xml/Schedule/?area=" + area + "&dt=" + date, {
			transformResponse: function (cnv) {
				//käännetään XML -> JSON
				var x2js = new X2JS();
				var aftCnv = x2js.xml_str2json(cnv);
				return aftCnv;
			}
		})
		.then(function success(data) {
			console.log(data);
			$scope.dataSetSchedule = data.data.Schedule.Shows.Show;
		}, function(error) {
			console.log("error schedule");
		});
	}
});