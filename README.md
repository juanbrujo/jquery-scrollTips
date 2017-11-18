# jQuery scrollTips

This small jQuery plugin creates tooltips that helps navigation within the same page, using a specific **HTML** markup.

[Check live demo](http://www.csslab.cl/ejemplos/jquery-scrollTips/)

![jQuery-scrollTips.js](https://i.imgur.com/bWXTTq5.gif)

## Use

1. Include this plugin CSS styles:

```html
<link rel="stylesheet" href="jquery.scrollTips.min.css">
```

2. Include jQuery and this plugin:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="jquery.scrollTips.min.js"></script>
```

3. Start!:

```javascript
$("wrapperSelector").scrollTips();
```

## Options

```javascript
container: $("section"), // selector for each section to clone and create scrollTips
title: $("h1"), // selector for title to clone and create scrollTip names
exclude: $("#intro"),  // selector that will be excluded from scroolTip
smoothscroll: 500, // time (ms) to navigate between sections
onCreate: function(){}, // callback init
onSection: function(){} // callback each section changes
```

## Disclaimer

Based on the awesome work of [phoboslab](https://github.com/phoboslab)


## License

[MIT License](http://mit-license.org/) free to use and modify but not to resell.
