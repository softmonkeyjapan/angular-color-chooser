/*
 * angular-color-chooser
 *
 * Allow you to pick a color from a custom palette
 *
 * (c) 2015 Loic Kartono
 * License: MIT
 */

'use strict';

(function () {

  angular.module('lk-color-chooser', [])

  .provider('lkColorSettings', function () {
    this.colors = [];

    /**
     * @ngdoc function
     * @name lkColorSettings.$get
     * @module lk-color-chooser
     * @kind function
     *
     * @description Provider factory $get method.
     * @returns {object} Hash of attributes.
     */
    this.$get = function () {
      return {
        colors: this.colors
      }
    };

    /**
     * @ngdoc function
     * @name lkColorSettings.configure
     * @module lk-color-chooser
     * @kind function
     *
     * @description Set the options.
     * @param {object} Hash of options.
     * @returns {void} Modify class attributes value.
     */
    this.configure = function (config) {
      var key;
      for (key in config) {
        this[key] = config[key];
      }
    };
  })

  .directive('lkColorChooser', ['lkColorSettings', '$timeout', function (lkColorSettings, $timeout) {
    return {
      restrict: 'EA',
      template: '<ul class="lk-color-chooser"><lk-color ng-repeat="color in colors track by $index" color="color" ng-class="{\'selected\': selected == color}"></lk-color></ul>',
      replace: true,
      scope: {
        colors: '=?',
        selected: '='
      },
      controller: ['$scope', '$timeout', function lkColorChooserCtrl ($scope, $timeout) {
        this.setSelectedColor = function (color) {
          $timeout(function() {
            $scope.selected = color;
          });
        }
      }],
      link: function (scope, element, attrs) {
        if (!scope.colors) {
          scope.colors = lkColorSettings.colors;
        }
      }
    }
  }])

  .directive('lkColor', function () {
    return {
      restrict: 'EA',
      require: '^lkColorChooser',
      template: '<li class="lk-color-chooser__color" style="background-color: {{ color }}">&nbsp;</li>',
      replace: true,
      scope: {
        color: '='
      },
      link: function (scope, element, attrs, lkColorChooserCtrl) {
        element.on('click', function () {
          lkColorChooserCtrl.setSelectedColor(scope.color);
        })
      }
    }
  });

})();
