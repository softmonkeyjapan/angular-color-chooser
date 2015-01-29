'use strict';

(function () {

  angular.module('lk-color-chooser', [])

  .provider('lkColorChooser', function () {
    this.colors = [];

    /**
     * Provider factory $get method
     * Return Google Picker API settings
     */
    this.$get = function () {
      return {
        colors: this.colors
      }
    };

    /**
     * Set the API config params using a hash
     *
     * param [Object] config Hash of options
     */
    this.configure = function (config) {
      var key;
      for (key in config) {
        this[key] = config[key];
      }
    };
  });

})();
