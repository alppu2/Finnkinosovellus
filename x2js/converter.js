var app = angular.module('Finnkinosovellus', []);
app.controller('AppController', function ($scope, $http) {
	$http.get("http://www.finnkino.fi/xml/TheatreAreas/", {
		transformResponse: function (cnv) {
			var x2js = new X2JS();
			var aftCnv = x2js.xml_str2json(cnv);
			return aftCnv;
		}
	})
    .then(function success(data) {
		console.log(data);
		$scope.dataSetTheatres = data.data.TheatreAreas.TheatreArea;
	}, function(error) {
		console.log("error theatres");
	});
});



/*angular.module('Finnkinosovellus.service',[]).
    factory('DataSource', ['$http',function($http){
		return {
            get: function(callback){
                $http.get(
                    'http://www.finnkino.fi/xml/TheatreAreas/',
                    {transformResponse:function(data) {
                        // muutetaan data JSON muotoon 
                        // ja siirretään se success funktiolle
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
                        return json;
						console.log("eka");
                        }
                    }
                ).
                success(function(data, status) {
                    // lähetetään muutettu data
                    // takas callback funktiolle
					callback(data);
					console.log("toka");
                })
            }
        }
    }]);

angular.module('Finnkinosovellus',['Finnkinosovellus.service']);

var AppController = function($scope,DataSource) {
     
    //callback funktio
    setData = function(data) {
        $scope.dataSet = data;
		console.log("kolmas");
    }
    DataSource.get(setData);
     
}*/