
# aria-isolate

Uses aria-hidden to hide all elements expect a given modal element

## Installation

Include as a [component](https://github.com/componentjs/component) using

```js
var AriaIsolate = require('isner/aria-isolate');
```

or include the distributable (`dist/aria-isolate.js`) in your page using a script tag, exposing `window.AriaIsolate`.

```html
<script src="aria-isolate.js"></script>

<script>
  var isolator = new AriaIsolate(modalEl);
</script>
```

## Directions

Assuming `AriaIsolate` is available

```js
var isolator = new AriaIsolate(modalEl);

// Isolates `modalEl` using 'aria-hidden' on others
isolator.activate();

// Removes 'aria-hidden' from cached list of others
isolator.deactivate();
```
