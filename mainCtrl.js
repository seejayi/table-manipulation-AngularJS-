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

// app.directive( 'editInPlace', function() {
//   return {
//     restrict: 'E',
//     scope: { value: '=' },
//     template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
//     link: function ( $scope, element, attrs ) {

//       var inputElement = angular.element( element.children()[1] );
//       element.addClass( 'edit-in-place' );
//       $scope.editing = false;

//       $scope.edit = function () {
//         $scope.editing = true;
//         element.addClass( 'active' );
//         inputElement[0].focus();
//       };

//       inputElement.prop( 'onblur', function() {
//         $scope.editing = false;
//         element.removeClass( 'active' );
//       });
//     }
//   };
// });
