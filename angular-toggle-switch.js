angular.module('toggle-switch', ['ng']).directive('toggleSwitch', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      model: '=',
      onLabel: '@',
      offLabel: '@'
    },
    template: '<div class="switch" ng-click="toggle()"><div ng-class="{\'switch-off\': !model, \'switch-on\': model}"><span class="switch-left" ng-bind="onLabel">On</span><span class="knob">&nbsp;</span><span class="switch-right" ng-bind="offLabel">Off</span></div></div>',
    link: function ($scope, element, attrs) {
      attrs.$observe('onLabel', function(val) {
        $scope.onLabel = angular.isDefined(val) ? val : 'On';
      });

      attrs.$observe('offLabel', function(val) {
        $scope.offLabel = angular.isDefined(val) ? val : 'Off';
      });

      return $scope.toggle = function () {
        element.children().addClass('switch-animate')
        return $scope.model = !$scope.model;
      };
    }
  };
});
