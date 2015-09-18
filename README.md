# angular-color-chooser
An Angular directive that allow you to pick a color from a custom palette

![Color Chooser](screenshot.png)

# Why

There's a bunch of color picker components out there, they are great at what they are doing, and this one does not aims to replace them.
Unfortunately, allowing your end users to choose any color they want to, can lead sometimes to a UI-break. So how do you handle a case when you only want to allow to pick a color from a custom color palette? This component is the answer.

**Requirements:** AngularJS 1.3+
**File Size:** 0.98 kb minified

# Installation

1. Using Bower (recommended)

  ```Bash
  bower install angular-color-chooser --save
  ```

2. Manually

Download [https://github.com/softmonkeyjapan/angular-color-chooser/archive/v0.1.2.zip](https://github.com/softmonkeyjapan/angular-color-chooser/archive/v0.1.2.zip)


# Usage

1. Include both the `color-chooser.css` and `color-chooser.js` in your HTML.

  ```html
  <link rel="stylesheet" href="color-chooser.css">
  <script src="color-chooser.js"></script>
  ```

2. Include the Color Chooser as a dependency for your app

  ```js
  angular.module('myApp', ['lk-color-chooser'])
  ```

3. Configure the plugin (see below **configuration** section)

4. Create a scope to bind the value of the selected color

  ```js
  angular.module('myApp', ['lk-color-chooser'])

  .controller('ExampleCtrl', function() {
    this.selectedColor = '';
    // or
    this.selectedColor = '#CEA1E1'; // Pre selected value from the list
  });
  ```

5. Add the directive to your HTML element

  ```html
  <lk-color-chooser selected-color="example.selectedColor"></lk-color-chooser>
  ```

6. That's it, you're done!


# Configuration

In order for the component to work, you'll need to provide a set of colors. There's 2 ways of doing this :

### Using configure(options) from Provider

You can define in a global way, the set of colors you want to use within your app.
NOTE : This will be override if you pass the colors directly from a scope (see below).

```js
angular.module('myApp', ['lk-color-chooser'])

.config(['lkColorSettingsProvider', function(lkColorSettingsProvider) {

  lkColorSettingsProvider.configure({
    colors: ['#72C2FF', '#6798E6', '#CEA1E1', '#FFADED', '#FC809B', '#FFC787', '#FFF074', '#A6FC81', '#09E6AE', '#18C4C7']
  });
}])
```

### From a controller

In some case, you will want to use some colors, maybe different from the ones defined within the provider. In that case you can create a new scope from inside a controller :

```js
angular
  .module('myApp', ['lk-color-chooser'])
  .controller('ExampleCtrl', function () {
    this.colors = ['#72C2FF', '#6798E6', '#CEA1E1']
  });
```

and simply pass it to the directive :

```html
<lk-color-chooser colors="example.colors" selected-color="example.selectedColor"></lk-color-chooser>
```

NOTE : Passing a scope to the directive's `colors` attribute will override the provider definition.

# Tests

```bash
npm install && npm install -g karma-cli
bower install
karma start test/karma.conf.js
```

# License
Licensed under the MIT license
