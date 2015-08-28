var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function ($scope) {
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
	}

	$scope.removeRow = function(index){
	    $scope.persons.splice(index,1);
	}

}]);

app.directive( 'editInPlace', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
    link: function ( $scope, element, attrs ) {

      var inputElement = angular.element( element.children()[1] );
      element.addClass( 'edit-in-place' );
      $scope.editing = false;

      $scope.edit = function () {
        $scope.editing = true;
        element.addClass( 'active' );
        inputElement[0].focus();
      };

      inputElement.prop( 'onblur', function() {
        $scope.editing = false;
        element.removeClass( 'active' );
      });
    }
  };
});
