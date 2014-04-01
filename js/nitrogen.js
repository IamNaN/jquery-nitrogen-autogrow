//  Nitrogen autogrow jquery plugin 0.1
//  by IamNaN (Dave Gerton) of pinch/zoom
//  Nitrogen is a fertilizer that makes your textareas (auto)grow
//  https://github.com/IamNaN/nitrogen-jQuery-autogrow
//  
//  Copyright 2014, Dave Gerton
//  https://pinchzoom.com
//  
//  Licensed under the MIT license:
//  http://www.opensource.org/licenses/MIT
//  
//  Usage:
//   $('.your-css-selector').nitrogen()
//  
//  Uses the css line-height property to set the correct height of the textarea.
//  Avoid setting the height property or using the rows attribute of the control.

jQuery.fn.extend({
  nitrogen: function() {
    return this.each(function() {
      var expand, scrollHeight;
      $(this).on('keyup', function() {
        return expand($(this));
      });
      scrollHeight = function(element) {
        var h, temp;
        temp = element.clone(false);
        $(temp).val($(element).val()).css('opacity: 0');
        $(temp).height(0).appendTo('body');
        h = $(temp).get(0).scrollHeight;
        h -= parseInt(element.css('padding-top')) + parseInt(element.css('padding-bottom'));
        $(temp).remove();
        return h;
      };
      return expand = function(element) {
        var h;
        h = scrollHeight(element);
        if (h !== element.height()) {
          return $(element).height(h);
        }
      };
    });
  }
});
