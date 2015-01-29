'use strict';

describe('lkColorChooserProvider', function () {

  var colorChooserProvider;

  beforeEach(module('lk-color-chooser', function (lkColorChooserProvider) {
    colorChooserProvider = lkColorChooserProvider;
  }));

  it('should be defined', inject(function (lkColorChooser) {
    expect(colorChooserProvider).toBeDefined();
  }));

  it('should have a configure method', function () {
    expect(colorChooserProvider.configure).toBeDefined();
  });

  describe('settings', function () {
    it('should have default value', function () {
      expect(colorChooserProvider.colors).toEqual([]);
    });

    describe('#configure', function () {
      beforeEach(function () {
        colorChooserProvider.configure({
          colors: ['#72C2FF', '#6798E6', '#CEA1E1', '#FFADED', '#FC809B']
        });
      })

      it('should affect values', function () {
        expect(colorChooserProvider.colors).toEqual([
          '#72C2FF', '#6798E6', '#CEA1E1', '#FFADED', '#FC809B'
        ]);
      });
    });

    describe('#set', function () {
      beforeEach(function () {
        colorChooserProvider.colors = ['#72C2FF', '#6798E6']
      });

      it('should affect values', function () {
        expect(colorChooserProvider.colors).toEqual([
          '#72C2FF', '#6798E6'
        ])
      });
    });
  });
});
