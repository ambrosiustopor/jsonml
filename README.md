# jsonml

JSONML transformation utility.

## Basic Usage

Include the utility:

```html
<script src="JSONML-1.0.0.js"></script>
```

Create JSONML elements:

```javascript
var names = ['John', 'Sarah', 'Mike'];

var ul = ['ul', {'class': 'list'}];
var li;

names.forEach(function(name) {
li = ['li', {'class':'list-item'}, name];
	ul.push(li);
});
```

Use `makeDOMElement` to transform the JSONML elements to DOM elements:

```javascript
$container = jQuery('#container-names');
$container.append(
	JSONML.makeDOMElement(ul)
);
```

## License

Licensed under the MIT license. (http://opensource.org/licenses/MIT)
