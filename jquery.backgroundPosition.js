/*! Copyright (c) 2011 Peter (Poetro) Galiba (http://poetro.hu/) MIT Licensed */

/**
 * @fileoverview CSS get/set and animate background position values independently.
 * @author Peter (Poetro) Galiba poetro@poetro.hu
 * @example
 *   // Get the CSS background positions's X component
 *   $(elem).css('background-position-x');
 *   // Set the CSS background positions's Y component
 *   $(elem).css('background-position-y', 0);
 *   // Animate the background positions X and Y component
 *   $(elem).animate({
 *     backgroundPositionY: '100%',
 *     backgroundPositionX: '100%'
 *   }, 1000);
 * @requires jQuery 1.4.3+
 */
(function ($) {
  var bgpos = 'background-position', cc = $.camelCase;
  function normalize(value) {
    var h = '100%', z = '0px', options = {top : z, bottom: h, left: z, right: h};
    return options[value] || value;
  }
  $.each(['x', 'y'], function (i, v) {
    var camelCase = cc(bgpos + '-' + v);
    $.cssHooks[camelCase] = {
      get: function (elem) {
        var pos = $.css(elem, bgpos).split(/\s+/, 2);
        return normalize(pos[i]);
      },
      set: function (elem, value) {
        var pos = $.css(elem, bgpos).split(/\s+/, 2);
        pos[i] = normalize(value);
        $.style(elem, bgpos, pos.join(' '));
      }
    };
    $.fx.step[camelCase] = function (fx) {
      $.style(fx.elem, fx.prop, fx.now);
    };
  });
}(jQuery));