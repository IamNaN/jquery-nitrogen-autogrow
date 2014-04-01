# Nitrogen
## jQuery plug-in for autogrowing text areas

Textareas are rather static HTML controls. Nitrogen allows the textarea to expand as content is added to it, or contract as content is removed.

There are other plug-ins out there, but Nitrogen honors any CSS styling you apply to the textarea, including font-size, line-height, and padding. Further, it only requires one line of code to get it going.

#### Usage:
Include either nitrogen.js or nitrogen.js.coffee in your project. After the DOM is loaded, attach nitrogen to whatever elements you need to autogrow:

    # CoffeeScript
    jQuery ->
        $('.your-css-selector').nitrogen()
...or...
    
    // Javascript
    jQuery(function() {
      return $('.your-css-selector').nitrogen();
    });

Done.

### Demo
Checkout this [jsFiddle](http://jsfiddle.net/dgerton/RjLJH/) for the demo.

### Tips:
* Nitrogen will accept any CSS selector.
* The method used above only attaches Nitrogen to elements that matched the selector at the time the DOM is loaded. If you additional elements are added to the DOM afterwards, the nitrogen method needs to be called on them.
* Use the max-height and min-height CSS properties in your class to set the limits.

### Coming:
* Jasmine tests
* Rails gem

### Contributing
1. Fork the [official repository](https://github.com/IamNaN/jquery-nitrogen-autogrow/tree/master).
1. Ensure that all the tests pass and your changes have complete test coverage.
1. Make your changes in a topic branch.
1. Send a pull request.

Notes:
* Contributions without tests won't be accepted.
* Please don't update the Gem version.
