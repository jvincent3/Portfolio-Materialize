$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".carousel.carousel-slider").carousel({
        fullWidth: true,
        indicators: true,
        duration: 400,
    })
    $(".parallax").parallax();
    $(".modal").modal({
        opacity:.7,
        inDuration: 400,
        outDuration: 400,
    });
})
