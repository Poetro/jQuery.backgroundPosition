With the plugin you can get/set and animate background position CSS values independently.

Get the CSS background positions's X component

    $(elem).css('background-position-x');

Set the CSS background positions's Y component

    $(elem).css('background-position-y', 0);

Animate the background positions X and Y component

    $(elem).animate({
      backgroundPositionY: '100%',
      backgroundPositionX: '100%'
    }, 1000);

Requires jQuery 1.4.3+.