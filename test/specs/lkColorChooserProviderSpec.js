'use strict';

describe('lkColorSettingsProvider', function () {

  var colorSettingsProvider;

  beforeEach(module('lk-color-chooser', function (lkColorSettingsProvider) {
    colorSettingsProvider = lkColorSettingsProvider;
  }));

  it('should be defined', inject(function (lkColorSettings) {
    expect(colorSettingsProvider).toBeDefined();
  }));

  it('should have a configure method', function () {
    expect(colorSettingsProvider.configure).toBeDefined();
  });

  describe('settings', function () {
    it('should have default value', function () {
      expect(colorSettingsProvider.colors).toEqual([]);
    });

    describe('#configure', function () {
      beforeEach(function () {
        colorSettingsProvider.configure({
          colors: ['#72C2FF', '#6798E6', '#CEA1E1', '#FFADED', '#FC809B']
        });
      })

      it('should affect values', function () {
        expect(colorSettingsProvider.colors).toEqual([
          '#72C2FF', '#6798E6', '#CEA1E1', '#FFADED', '#FC809B'
        ]);
      });
    });

    describe('#set', function () {
      beforeEach(function () {
        colorSettingsProvider.colors = ['#72C2FF', '#6798E6']
      });

      it('should affect values', function () {
        expect(colorSettingsProvider.colors).toEqual([
          '#72C2FF', '#6798E6'
        ])
      });
    });
  });
});
