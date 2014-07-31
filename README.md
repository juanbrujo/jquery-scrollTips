# jQuery scrollTips

This small jQuery plugin creates tooltips that helps navigation within the same page, using a specific **HTML** markup.

![jQuery-scrollTips.js](https://dl.dropboxusercontent.com/u/3522/jQuery_scrollTip.gif)

## Use

1. Include this plugin CSS styles:

	`<link rel="stylesheet" href="jquery.scrollTips.min.css">`

2. Include jQuery and this plugin:

	`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>`
	
	`<script src="jquery.scrollTips.min.js"></script>`

3. Start!:

	`$("wrapperSelector").scrollTips();`

## Options

	container: $("section"), // selector for each section to clone and create scrollTips
    title: $("h1"), // selector for title to clone and create scrollTip names
    exclude: $("#intro"),  // selector that will be excluded from scroolTip
    smoothscroll: 500, // time (ms) to navigate between sections
    onCreate: function(){}, // callback init
    onSection: function(){} // callback each section changes

#### [demo/](https://github.com/juanbrujo/jquery-scrollTips/tree/master/demo)

#### [dist/](https://github.com/juanbrujo/jquery-scrollTips/tree/master/dist)

#### [src/](https://github.com/juanbrujo/jquery-scrollTips/tree/master/src)



## Disclaimer

Based on the awesome work of [phoboslab](https://github.com/phoboslab)


## License

[MIT License](http://mit-license.org/) free to use and modify but not to resell.
