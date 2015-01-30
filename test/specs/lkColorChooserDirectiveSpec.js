'use strict';

describe('lkColorChooserDirective', function () {

  var element,
      compile,
      scope,
      colorSettingsProvider;

  beforeEach(module('lk-color-chooser', function (lkColorSettingsProvider) {
    colorSettingsProvider = lkColorSettingsProvider;
  }));
  beforeEach(inject(function ($rootScope, $compile) {
    scope   = $rootScope.$new();
    compile = $compile;
  }));

  describe('with no set of colors', function () {
    it('should not create any color element', function () {
      element = angular.element('<lk-color-chooser></lk-color-chooser>');
      compile(element)(scope);
      scope.$digest();

      var list = element.find('li');
      expect(list.length).toBe(0);
    });
  });

  describe('with colors defined', function () {
    beforeEach(function () {
      colorSettingsProvider.colors = ['#72C2FF', '#6798E6', '#CEA1E1', '#FFADED'];
    });

    it('should create list of colors', function () {
      element = angular.element('<lk-color-chooser></lk-color-chooser>');
      compile(element)(scope);
      scope.$digest();

      var list = element.find('li');
      expect(list.length).toBe(4);
    });
  });
});
