var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function ($scope) {
$scope.persons = [];
$scope.id = 0;

$scope.addRow = function(id){
	$scope.id++;
    $scope.persons.push({name:'', mobile:'', adress:''});
}

$scope.removeRow = function(index){
    $scope.persons.splice(index,1);
}
}]);