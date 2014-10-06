$(document).ready(function() {
    // Handle iframe resizing
    $('#nobox-iframe').iFrameResize({
        log: true,
        enablePublicMethods: true,
        checkOrigin: false,
        heightCalculationMethod: 'lowestElement'
    });

    // Send scrollTop value to iframe for modal positioning
    iframe = document.getElementById('nobox-iframe');
    $(window).on('scroll', function(e) {
        window.requestAnimationFrame(function() {
            iframe.contentWindow.postMessage($(window).scrollTop(), 'http://local-viajegenial.nbxapps.com:8000');
        });
    });
});
