var app = angular.module('app', []);


app.controller('myCtrl', ['$scope', '$http', '$timeout',  function ($scope, $http, $timeout) {
// $scope.allData = [];

//  $http.get('persons.json').success(function(data) {
//     $scope.allData = data;
//     $scope.persons.push(allData);
//   });

  $scope.editing = false;
  $scope.persons = [{
      id: 1,
      name: 'vasya',
      mobile: '1234134',
      adress: 'tratata'
    }, {
      id: 2,
      name: 'petya',
      mobile: '1234231134',
      adress: 'tratdsdcata'
    }, {
      id: 3,
      name: 'her',
      mobile: '1896634',
      adress: 'ddddddd'
    }];


  $scope.addRow = function(){
      var person = {
        name: $scope.name,
        mobile: $scope.mobile,
        adress: $scope.adress,
      };
      $scope.persons.push(person);
  $scope.editing = false;
  }

  $scope.removeRow = function(index){
      $scope.persons.splice(index, 1);
  }
  
  $scope.editingData = {};
  $scope.onEdit = function(field){
    $scope.editing = $scope.persons.indexOf(field);
    $scope.editingData[$scope.editing] = angular.copy(field);
  }

  $scope.save = function(index){
    $scope.persons[$scope.editing] = $scope.editingData;
  }
  $scope.cancel = function(index){
    $scope.persons[index] = $scope.editingData[index];
    $scope.editing = false;
  }

}]);
  var INTEGER_REGEXP = /^\-?\d*$/;
app.directive( 'integer', function() {
  return {
    require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            ctrl.$setValidity('integer', true);
            return viewValue;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('integer', false);
            return undefined;
          }
        });
      }
  };
});
